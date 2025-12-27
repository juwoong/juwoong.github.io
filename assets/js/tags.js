$(document).ready(function () {
  let currentCategory = 'all';
  let searchQuery = '';

  const $searchInput = $('#search-input');
  const $searchClear = $('#search-clear');
  const $categoryBtns = $('.category-btn');
  const $postItems = $('.post-item');
  const $resultsCount = $('#results-count');
  const $noResults = $('#no-results');

  // Get query params
  function getQueryParams() {
    const params = {};
    window.location.search.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (str, key, value) {
        params[key] = decodeURIComponent(value);
      }
    );
    return params;
  }

  // Initialize from URL params
  const queryTag = getQueryParams().tag;
  if (queryTag) {
    currentCategory = queryTag;
    $(`.category-btn[data-category="${queryTag}"]`).addClass('active');
    $('.category-btn[data-category="all"]').removeClass('active');
  }

  // Filter posts
  function filterPosts() {
    let visibleCount = 0;

    $postItems.each(function () {
      const $item = $(this);
      const title = $item.data('title') || '';

      // Check category match
      const matchesCategory = currentCategory === 'all' || $item.data(currentCategory) === true;

      // Check search match
      const matchesSearch = searchQuery === '' || title.includes(searchQuery.toLowerCase());

      if (matchesCategory && matchesSearch) {
        $item.show();
        visibleCount++;
      } else {
        $item.hide();
      }
    });

    // Update results count
    if (searchQuery || currentCategory !== 'all') {
      $resultsCount.text(`${visibleCount}개의 글`).show();
    } else {
      $resultsCount.hide();
    }

    // Show/hide no results message
    if (visibleCount === 0) {
      $noResults.show();
    } else {
      $noResults.hide();
    }
  }

  // Category button click
  $categoryBtns.on('click', function () {
    $categoryBtns.removeClass('active');
    $(this).addClass('active');
    currentCategory = $(this).data('category');
    filterPosts();

    // Update URL without reload
    if (currentCategory === 'all') {
      history.pushState({}, '', window.location.pathname);
    } else {
      history.pushState({}, '', `?tag=${currentCategory}`);
    }
  });

  // Search input
  $searchInput.on('input', function () {
    searchQuery = $(this).val();
    filterPosts();

    if (searchQuery) {
      $searchClear.show();
    } else {
      $searchClear.hide();
    }
  });

  // Clear search
  $searchClear.on('click', function () {
    searchQuery = '';
    $searchInput.val('');
    $searchClear.hide();
    filterPosts();
  });

  // Initial filter
  filterPosts();
});
