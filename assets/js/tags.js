function getQueryParams() {
  var params = {};

  window.location.search.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (str, key, value) {
      params[key] = value;
    }
  );

  return params;
}

$(document).ready(function () {
  let currentTag = "";
  const queryTag = getQueryParams().tag;

  console.log(`queryTag: ${queryTag}`);

  if (queryTag) {
    currentTag = queryTag;
    filterByTagName(currentTag);
  } else {
    $(".hidden").removeClass("hidden");
  }
});

function filterByTagName(tagName) {
  $(".hidden").removeClass("hidden");
  $(".post-item").each((index, elem) => {
    if (!elem.hasAttribute(`data-${tagName}`)) {
      $(elem).addClass("hidden");
    }
  });
  $(`.tag`).removeClass("selected");
  $(`.tag[data-tag=${tagName}]`).addClass("selected");
}
