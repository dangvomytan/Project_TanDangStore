use tandangstore;
SELECT product_name, version_name FROM tbl_products
join tbl_versions on tbl_products.id = tbl_versions.id_product;

SELECT * FROM tbl_products
join tbl_versions on tbl_versions.id_product = tbl_products.id
join tbl_cartitems on tbl_cartitems.id_version =tbl_versions.id 
where id_cart = 1