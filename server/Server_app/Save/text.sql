use tandangstore;

SELECT * FROM tbl_products
join tbl_types on tbl_products.id_type = tbl_types.id;

SELECT * FROM tbl_categories
join tbl_types on  tbl_types.id_category = tbl_categories.id;

SELECT * FROM tbl_categories
join tbl_types on  tbl_types.id_category = tbl_categories.id
join tbl_products on tbl_products.id_type = tbl_types.id
where tbl_categories.id =1;

SELECT * FROM tbl_categories
join tbl_types on  tbl_types.id_category = tbl_categories.id
join tbl_products on tbl_products.id_type = tbl_types.id
where tbl_types.id =1;

SELECT * FROM tbl_products
join tbl_versions  on tbl_products.id = tbl_versions.id_product
join tbl_images on tbl_versions.id = tbl_images.id_version
join tbl_specifications on tbl_versions.id=tbl_specifications.id_version







SELECT * FROM tbl_categories
join tbl_types on  tbl_types.id_category = tbl_categories.id
join tbl_products on tbl_products.id_type = tbl_types.id
join tbl_version on tbl_version.product_id = product.id



join tbl_categories on tbl_categories.id  = tbl_type.id_category
