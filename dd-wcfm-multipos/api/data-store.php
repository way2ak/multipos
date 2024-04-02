<?php
/**
 * Data Store.
 *
 * @package MultiPOS - Point of Sale for WCFM Marketplace
 * @version 1.0.0
 */

namespace DDWCMultiPOS\Api;

defined( 'ABSPATH' ) || exit();

/**
 * Data store class.
 */
class DDWCPOS_Data_Store {

	/**
	 * Contains an instance of the data store class that we are working with.
	 *
	 * @var DDWCPOS_Data_Store
	 */
	private $instance = null;

	/**
	 * Contains an array of default WC supported data stores.
	 * Format of object name => class name.
	 * Example: 'product' => 'WC_Product_Data_Store_CPT'
	 * You can also pass something like product_<type> for product stores and
	 * that type will be used first when available, if a store is requested like
	 * this and doesn't exist, then the store would fall back to 'product'.
	 * Ran through `woocommerce_data_stores`.
	 *
	 * @var array
	 */
	private $stores = [];

	/**
	 * Contains the name of the current data store's class name.
	 *
	 * @var string
	 */
	private $current_class_name = '';

	/**
	 * The object type this store works with.
	 *
	 * @var string
	 */
	private $object_type = '';

	/**
	 * Tells DDWCPOS_Data_Store which object (coupon, product, order, etc)
	 * store we want to work with.
	 *
	 * @throws Exception When validation fails.
	 * @param string $object_type Name of object.
	 */
	public function __construct( $object_type ) {
		$this->object_type = $object_type;
		$this->stores      = apply_filters( 'ddwcpos_data_stores', $this->stores );

		// If this object type can't be found, check to see if we can load one
		// level up (so if product-type isn't found, we try product).
		if ( array_key_exists( $object_type, $this->stores ) ) {
			$store = apply_filters( 'ddwcpos_' . $object_type . '_data_store', $this->stores[ $object_type ] );

			if ( ! class_exists( $store ) ) {
				throw new \Exception( esc_html__( 'Invalid data store.', 'ddwc-multipos' ) );
			}
			$this->current_class_name = $store;
			$this->instance           = new $store();
		} else {
			throw new \Exception( esc_html__( 'Invalid data store.', 'ddwc-multipos' ) );
		}
	}

	/**
	 * Get data function
	 *
	 * @param array $request_params
	 * @return object
	 */
	public function get_data( $request_params ) {
		$result = $this->instance->get_items( $request_params );
		return $result;
	}

	/**
	 * Only store the object type to avoid serializing the data store instance.
	 *
	 * @return array
	 */
	public function __sleep() {
		return [ 'object_type' ];
	}

	/**
	 * Re-run the constructor with the object type.
	 *
	 * @throws Exception When validation fails.
	 */
	public function __wakeup() {
		$this->__construct( $this->object_type );
	}

	/**
	 * Loads a data store.
	 *
	 * @param string $object_type Name of object.
	 *
	 * @since 3.0.0
	 * @throws Exception When validation fails.
	 * @return DDWCPOS_Data_Store
	 */
	public static function load( $object_type ) {
		return new DDWCPOS_Data_Store( $object_type );
	}

}
