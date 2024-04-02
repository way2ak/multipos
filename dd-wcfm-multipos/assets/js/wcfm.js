"use strict";

var ddwcpos = jQuery.noConflict();

document.addEventListener( 'DOMContentLoaded', () => {
    if ( ddwcpos( '.ddwcpos-verify-license' ).length ) {
        ddwcpos( '.ddwcpos-verify-license' ).on( 'click', e => {
            e.preventDefault();

            const licenseStatusElement = ddwcpos( '.ddwcpos-license-status' );
            const purchaseCodeElement  = ddwcpos( '#ddwcpos-purchase-code' );
            const purchaseEmailElement = ddwcpos( '#ddwcpos-purchase-email' );
            const purchaseCode         = purchaseCodeElement.val();
            const status               = e.target.getAttribute( 'data-action' );
            const purchaseEmail        = purchaseEmailElement.val();
            const buttonLabel          = e.target.innerHTML;

            if ( purchaseCode && ( 'deactivate' === status || ( purchaseEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( purchaseEmail ) ) ) ) {
                e.target.innerHTML   = e.target.getAttribute( 'data-fetching' );

                fetch( ddwcposWCFMObj.ajax.ajaxUrl, {
                    method: 'POST',
                    headers: new Headers( {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept'      : 'application/json',
                    } ),
                    body: `action=ddwcpos_verify_license&nonce=${ddwcposWCFMObj.ajax.ajaxNonce}&purchase_code=${purchaseCode}&purchase_email=${purchaseEmail}&status=${status}`
                })
                .then( response => response.json() )
                .then( response => {
                    e.target.innerHTML = buttonLabel;
                    const licenseStatusParentElement = licenseStatusElement.parent( '.notice' );
                    if ( response.success ) {
                        ddwcpos( '.ddwcpos-verify-license' ).removeClass( 'ddwcpos-hide' );
                        ddwcpos( e.target ).addClass( 'ddwcpos-hide' );
                        licenseStatusParentElement.addClass( 'notice-success' );
                        licenseStatusParentElement.removeClass( 'notice-error' );

                        if ( status == 'activate' ) {
                            purchaseCodeElement.addClass( 'ddwcpos-hide' );
                            purchaseEmailElement.addClass( 'ddwcpos-hide' );
                        } else {
                            purchaseCodeElement.removeClass( 'ddwcpos-hide' );
                            purchaseEmailElement.removeClass( 'ddwcpos-hide' );
                        }
                    } else {
                        licenseStatusParentElement.addClass( 'notice-error' );
                        licenseStatusParentElement.removeClass( 'notice-success' );
                    }
                    licenseStatusElement.html( response.message );
                    licenseStatusParentElement.removeClass( 'ddwcpos-hide' );
                } )
                .catch( err => {
                    console.log( err );
                } );
            } else {
                alert( 'Purchase code or email is not valid.' );
            }
        } );
    }

    if ( ddwcpos( '.ddwcpos-icon-upload' ).length ) {
        ddwcpos( '.ddwcpos-icon-upload' ).on( 'click', e => {
            e.preventDefault();
            var customUploader;
            var _self = e.target;
            var customUploader = wp.media( {
                title: ddwcposWCFMObj.i18n.uploadIcon,
                button: {
                    text: ddwcposWCFMObj.i18n.uploadIcon,
                },
                library: {
                    type: [ 'image' ]
                },
                multiple: false // Set this to true to allow multiple files to be selected
            } ).on( 'select', () => {
                var attachment = customUploader.state().get( 'selection' ).first().toJSON();
                const tdElement = ddwcpos( _self ).closest( 'td' );
                tdElement.find( 'input[type=hidden]' ).val( attachment.id );
                tdElement.find( 'img' ).attr( 'src', attachment.url );
            } ).open();
        } );
    }

    if ( ddwcpos( '.ddwcpos-users' ).length ) {
        ddwcpos( '.ddwcpos-users' ).select2( {
            ajax              : {
                method        : 'post',
                url           : ddwcposWCFMObj.ajax.ajaxUrl,   // AJAX URL is predefined in WordPress admin
                dataType      : 'json',
                delay         : 250,                            // delay in ms while typing when to perform a AJAX search
                data          : params => ( {
                    query        : params.term,                      // search query
                    action       : 'ddwcpos_get_users_list',
                    nonce: ddwcposWCFMObj.ajax.ajaxNonce,
                } ),
                processResults: response => {
                    let   options = [];
                    if ( response.success && response.users != undefined && response.users != null && response.users.length ) {
                        // users is the array of objects, and each of them contains value and the Label of the option
                        response.users.forEach( user => {
                            options.push( {
                                id  : user.ID,
                                text: `(#${user.ID}) ${user.user_login} <${user.user_email}>`
                            } );
                        } );
                    }
                    return {
                        results: options
                    };
                },
                cache: true
            },
            width             : ddwcpos( '#ddwcpos-transaction-from-date' ).length ? '20%': '25em',
            minimumInputLength: 1,                                                                 // the minimum of symbols to input before perform a search
            language          : {
                inputTooShort: args => `${ddwcposWCFMObj.i18n.pleaseEnter} ${args.minimum - args.input.length} ${ddwcposWCFMObj.i18n.moreCharacter}`,
                noResults: () => ddwcposWCFMObj.i18n.noResult,
            }
        } );
    }

    if ( document.querySelector( 'form.ddwcpos-payment-configuration-form' ) ) {
        const ddwcposFormTraverse = ( form, e ) => {
            var invalidFormFields = wp.template( 'ddwcpos_form_data_error' );
            let formContainsError = false;
            [ ...form.elements ].forEach( input => {
                input.style.borderColor = '';
                let invalidData = false;
                var inputVal = input.value.trim();

                if ( ( -1 == inputVal || ! inputVal ) && 'hidden' !== input.type && ! input.classList.contains( 'ddwcpos-hide' ) ) {
                    e.preventDefault();
                    input.style.borderColor = 'red';

                    formContainsError = true;
                } else {
                    if ( ! input.classList.contains( 'ddwcpos-hide' ) && /<\s?[^\>]*\/?\s?>/i.test( inputVal ) ) {
                        e.preventDefault();
                        invalidData = true;
                    }

                    if ( invalidData ) {
                        formContainsError       = true;
                        input.style.borderColor = 'red';
                    }
                }
            } );
            if ( formContainsError ) {
                form.insertAdjacentHTML( 'beforeBegin', invalidFormFields() );
            }
        }

        const ddwcposRemoveElements = elms => {
			[ ...elms ].forEach( el => {
				el.remove();
			} );
		};

        document.querySelector( 'form.ddwcpos-payment-configuration-form' ).addEventListener( 'submit', e => {
            ddwcposRemoveElements( document.querySelectorAll( '.notice' ) );
            ddwcposFormTraverse( e.target, e );
        } );

        document.addEventListener( 'click', e => {
            if ( e.target.classList.contains( 'ddwcpos-add-row' ) ) {
                e.preventDefault();
                const template        = e.target.getAttribute( 'data-template' );
                let   templateRow     = wp.template( template );
                const maxIndexElement = e.target.closest( 'form' ).querySelector( '#ddwcpos-max-index' );
                const rowIndex        = parseInt( e.target.closest( 'form' ).querySelector( '#ddwcpos-max-index' ).value );

                maxIndexElement.value = rowIndex + 1;
                e.target.closest( 'tr' ).insertAdjacentHTML( 'beforeBegin', templateRow( { key: rowIndex + 1 } ) );
            } else if ( e.target.classList.contains( 'ddwcpos-remove-row' ) ) {
                e.target.closest( 'tr' ).remove();
            }
        } );
    }

    if ( ddwcpos( '#ddwcpos-outlet-payments' ).length ) {
        ddwcpos( '#ddwcpos-outlet-payments' ).select2();
        ddwcpos( '#ddwcpos-outlet-tables' ).select2();
    }

    if ( ddwcpos( '.ddwcpos-select2' ).length ) {
        ddwcpos( '.ddwcpos-select2' ).select2();
    }

    if ( ddwcpos( '#ddwcpos-cashier-assigned-outlets' ).length ) {
        ddwcpos( '#ddwcpos-cashier-assigned-outlets' ).select2();
    }

    if ( ddwcpos( '.woocommerce-help-tip' ).length ) {
        ddwcpos( '.woocommerce-help-tip' ).tipTip( {
            'attribute': 'data-tip',
            'fadeIn':    50,
            'fadeOut':   50,
            'delay':     200
        } );
    }

    const productActionElements = document.querySelectorAll( '.ddwcpos-product-action' );
    if ( productActionElements.length ) {
        productActionElements.forEach( productActionElement => {
            productActionElement.addEventListener( 'click', e => {
                e.preventDefault();
                const rowElement    = e.target.closest( 'tr' );
                const productAction = e.target.getAttribute( 'data-action' );
                const productId     = e.target.getAttribute( 'data-product-id' );
                if ( 'update_barcode' === productAction ) {
                    const barcode = rowElement.querySelector( '.ddwcpos-barcode' ).value;
                    if ( barcode ) {
                        e.target.setAttribute( 'disabled', 'disabled' );
                        fetch( ddwcposWCFMObj.ajax.ajaxUrl, {
                            method : 'POST',
                            headers: new Headers( {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Accept'      : 'application/json',
                            } ),
                            body: `action=ddwcpos_update_product_meta&nonce=${ddwcposWCFMObj.ajax.ajaxNonce}&product_action=${productAction}&barcode=${barcode}&id=${productId}`
                        } )
                        .then( response => response.json() )
                        .then( response => {
                            e.target.removeAttribute( 'disabled' );
                            if ( response.success ) {
                                rowElement.querySelector( '.ddwcpos-barcode-image' ).setAttribute( 'src', response.image );
                                rowElement.querySelector( 'td .ddwcpos-product-action' ).setAttribute( 'data-barcode-image', response.image );
                            }
                            alert( response.message );
                        } )
                        .catch( err => {
                            console.log( err );
                        } );
                    } else {
                        alert( ddwcposWCFMObj.i18n.barcodeError );
                    }
                } else if ( 'print_barcode' === productAction ) {
                    const barcodeImage           = e.target.getAttribute( 'data-barcode-image' );
                    const barcodeQuantityElement = rowElement.querySelector( '.ddwcpos-barcode-quantity' );
                    const barcodeQuantity        = parseInt( barcodeQuantityElement.value );

                    if ( barcodeQuantity ) {
                        barcodeQuantityElement.value = '';
                        let printContents = '';

                        for ( let i = 1; i <= barcodeQuantity; i++ ) {
                            printContents += `<div style="width:max-content; margin:${ddwcposWCFMObj.ddwcpos_configuration.barcode_margin}; display:inline-block; text-align: center;"><img src="${barcodeImage}" alt="Barcode" /></div>`;
                        }

                        let style = `<style type="text/css">
                            @page {
                                size: ${ddwcposWCFMObj.ddwcpos_configuration.barcode_printer_width} ${ddwcposWCFMObj.ddwcpos_configuration.barcode_printer_height};
                                margin: ${ddwcposWCFMObj.ddwcpos_configuration.barcode_printer_margin};
                                text-align: center;
                            }
                        </style>`;
                        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
                            let printWindow = window.open( "", "PRINT", "height=400,width=600" );
                            printWindow.document.write( "<html><head><title>Barcode</title>" + style );

                            printWindow.document.write( "</head><body>" );
                            printWindow.document.write( printContents );
                            printWindow.document.write( "</body></html>" );
                            printWindow.document.close();
                            printWindow.focus();

                            printWindow.addEventListener( 'load', () => {
                                setTimeout( () => {
                                    printWindow.print();
                                    printWindow.close();
                                }, 500 );
                            }, true );

                        } else {
                            let frame1 = document.createElement( 'iframe' );
                            frame1.name = "frame1";
                            document.body.appendChild( frame1 );

                            let frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;

                            frameDoc.document.open();
                            frameDoc.document.write( "<html><head><title>Barcode</title>" + style );
                            frameDoc.document.write( "</head><body>" );
                            frameDoc.document.write( printContents );
                            frameDoc.document.write( "</body></html>") ;
                            frameDoc.document.close();

                            setTimeout( () => {
                                window.frames[ 'frame1' ].focus();
                                window.frames[ 'frame1' ].print();
                                document.body.removeChild( frame1 );
                            }, 500 );
                        }
                    } else {
                        alert( ddwcposWCFMObj.i18n.barcodeQuantityError );
                    }
                } else if ( 'update_custom_stock' === productAction ) {
                    const customStock = rowElement.querySelector( '.ddwcpos-custom-stock' ).value;
                    const outletId    = e.target.getAttribute( 'data-outlet-id' );
                    if ( ! isNaN( customStock ) ) {
                        e.target.setAttribute( 'disabled', 'disabled' );
                        fetch( ddwcposWCFMObj.ajax.ajaxUrl, {
                            method : 'POST',
                            headers: new Headers( {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Accept'      : 'application/json',
                            } ),
                            body: `action=ddwcpos_update_product_meta&nonce=${ddwcposWCFMObj.ajax.ajaxNonce}&product_action=${productAction}&custom_stock=${customStock}&id=${productId}&outlet_id=${outletId}`
                        } )
                        .then( response => response.json() )
                        .then( response => {
                            e.target.removeAttribute( 'disabled' );
                            alert( response.message );
                        } )
                        .catch( err => {
                            console.log( err );
                        } );
                    } else {
                        alert( ddwcposWCFMObj.i18n.customStockError );
                    }
                }
            } );
        } );
    }

    const barcodeInputElements = document.querySelectorAll( '.ddwcpos-barcode, .ddwcpos-barcode-quantity, .ddwcpos-custom-stock' );
    if ( barcodeInputElements.length ) {
        barcodeInputElements.forEach( barcodeInputElement => {
            barcodeInputElement.addEventListener( 'keydown', e => {
                if ( 13 === e.keyCode ) {
                    e.preventDefault();
                    e.target.nextElementSibling.click();
                    return false;
                }
            } );
        } );
    }

    if ( ddwcpos( '.ddwcpos-datepicker' ).length ) {
        ddwcpos( '.ddwcpos-datepicker' ).datepicker( {
            dateFormat: 'yy-mm-dd',
            onSelect: datetext => {
                ddwcpos( this ).val( datetext );
            }
        } );
    }

    if ( document.querySelector( '#ddwcpos-invoice-html' ) ) {
        const invoiceCSSElement = document.querySelector( '#ddwcpos-invoice-css' );

		tinymce.init({
			selector             : '#ddwcpos-invoice-html',
			menubar              : false,
			height               : 600,
			plugins              : [ 'textcolor', 'link', 'lists', 'hr', 'media', 'charmap', 'image' ],
			toolbar              : 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter | alignright alignjustify | bullist numlist outdent indent | hr |  styleselect | link forecolor removeformat | charmap removeformat | image',
			content_style        : invoiceCSSElement.value,
			urlconverter_callback: (url, node, on_save, name) => url
		});

        document.querySelectorAll( '.ddwcpos-editor-switch-button' ).forEach( element => {
            element.addEventListener( 'click', e => {
                if ( ! e.target.classList.contains( 'ddwcpos-active' ) ) {
                    document.querySelectorAll( '.ddwcpos-editor-switch-button' ).forEach( elm => {
                        elm.classList.remove( 'ddwcpos-active' );
                    } );

                    e.target.classList.add( 'ddwcpos-active' );
                    const target = e.target.getAttribute( 'data-target' );

                    if ( 'editor' === target ) {
                        tinymce.init({
                            selector             : '#ddwcpos-invoice-html',
                            menubar              : false,
                            height               : 600,
                            plugins              : [ 'textcolor', 'link', 'lists', 'hr', 'media', 'charmap', 'image' ],
                            toolbar              : 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter | alignright alignjustify | bullist numlist outdent indent | hr |  styleselect | link forecolor removeformat | charmap removeformat | image',
                            content_style        : document.querySelector( '#ddwcpos-invoice-css' ).value,
                            urlconverter_callback: (url, node, on_save, name) => url
                        });
                    } else if ( 'html' === target ) {
                        tinymce.remove();
                    }
                }
            } );
        } );

        let invoiceCssEditor = CodeMirror.fromTextArea( invoiceCSSElement, {
            mode           : "text/css",
            styleActiveLine: true,
            lineNumbers    : true,
            lineWrapping   : true,
            autoRefresh    : true
        } );

        invoiceCssEditor.setSize('auto', 700);

        invoiceCssEditor.on( 'change', editor => {
            if ( document.querySelector( '.ddwcpos-editor-switch-button.ddwcpos-active' ).getAttribute( 'data-target' ) === 'editor' ) {
                tinymce.remove();
                tinymce.init({
                    selector:  '#ddwcpos-invoice-html',
                    menubar: false,
                    plugins: [ 'textcolor', 'link', 'lists', 'hr', 'media', 'charmap', 'image' ],
                    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter | alignright alignjustify | bullist numlist outdent indent | hr |  styleselect | link forecolor removeformat | charmap removeformat | image',
                    content_style: editor.getValue(),
                    urlconverter_callback: (url, node, on_save, name) => url
                });
            }
        } );
	}
} );