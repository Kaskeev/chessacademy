function t_prod__init(t){var r=$("#rec"+t);r.find(".js-product").each(function(){$(this).find(".js-product-option").length&&t_prod__initProduct(t,$(this))})}function t_prod__initProduct(t,r){t_prod__initPrice(t,r),t_prod__addEvents__options(t,r),t_prod__updatePrice(t,r)}function t_prod__initPrice(t,r){var i=r.find(".js-product-price");if(i.length);else{r.append("<div style='display:none;' class='js-product-price'></div>");i=r.find(".js-product-price")}var d=i.html();if(void 0!==d&&""!=d){if(!i.attr("data-product-price-def")&&!i.attr("data-product-price-def-str")){var e=t_prod__cleanPrice(d);i.attr("data-product-price-def",e),d=d.replace(/"/g,""),i.attr("data-product-price-def-str",d)}}else i.attr("data-product-price-def","0")}function t_prod__updatePrice(t,r){var i=0,d=0,e=r.find(".js-product-price"),o=e.attr("data-product-price-def");if(o*=1,r.find(".js-product-option-variants").each(function(){var t=$(this),r=t.find("option:selected").attr("data-product-variant-price");if(void 0!==r&&""!=r){var i=t_prod__cleanPrice(r);r.indexOf("+")>-1?d+=i:0!==parseFloat(i)&&(o=i)}}),i+=o+d,i>0)e.html(t_prod__showPrice(t_prod__roundPrice(i)));else{var c=e.attr("data-product-price-def-str");e.html(c)}}function t_prod__addEvents__options(t,r){var i=r.find(".js-product-option-variants");i.length&&i.change(function(){var r=$(this).closest(".js-product");t_prod__updatePrice(t,r)})}function t_prod__cleanPrice(t){return void 0===t||""==t||0==t?t=0:(t=t.replace(",","."),t=t.replace(/[^0-9\.]/g,""),t=parseFloat(t).toFixed(2),isNaN(t)&&(t=0),t=parseFloat(t),t*=1,t<0&&(t=0)),t}function t_prod__roundPrice(t){return void 0===t||""==t||0==t?t=0:(t=parseFloat(t).toFixed(2),t=parseFloat(t),t*=1,t<0&&(t=0)),t}function t_prod__showPrice(t){if(void 0===t||0==t||""==t)t="";else{if(t=t.toString(),void 0!==window.tcart&&void 0!==window.tcart.currency_dec&&"00"==window.tcart.currency_dec)if(-1===t.indexOf(".")&&-1===t.indexOf(","))t+=".00";else{var r=t.substr(t.indexOf(".")+1);1===r.length&&(t+="0")}t=t.replace(/\B(?=(\d{3})+(?!\d))/g," "),t=void 0!==window.tcart&&void 0!==window.tcart.currency_sep&&"."==window.tcart.currency_sep?t.replace(",","."):t.replace(".",",")}return t}