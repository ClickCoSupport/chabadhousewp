$j = jQuery.noConflict();

function restructureMecListLayout() {
  $j('.mec-skin-list-container').each(function () {
    var $container = $j(this);

    $container.find('.mec-event-article').each(function () {
      var $article = $j(this);

      if ($article.hasClass('mec-restructured')) return;
      $article.addClass('mec-restructured');

      var $title = $article.find('.mec-event-title').first();
      var $desc = $article.find('.mec-event-description').first();
      var $date = $article.find('.mec-date-details').first();
      var $time = $article.find('.mec-time-details').first();
      var $location = $article.find('.mec-venue-details').first();
      var $button = $article.find('.mec-booking-button').first();
      var $contentWrap = $article.find('.mec-event-content').first();
      var $metaWrap = $article.find('.mec-event-meta-wrap').first();

      if (!$title.length || !$contentWrap.length) return;

      var $dateTimeRow = $j('<div class="mec-datetime-row"></div>');
      if ($date.length) $dateTimeRow.append($date);
      if ($time.length) $dateTimeRow.append($time);

      if ($date.length || $time.length) {
        $title.after($dateTimeRow);
      }

      if ($desc.length) $contentWrap.append($desc);
      if ($location.length) $contentWrap.append($location);
      if ($button.length) $contentWrap.append($button);

      if ($metaWrap.length && !$metaWrap.find('.mec-date-details, .mec-time-details, .mec-venue-details').length) {
        $metaWrap.hide();
      }
    });

    $container.addClass('mec-layout-ready');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', restructureMecListLayout);
} else {
  restructureMecListLayout();
}

$j(document).on('click', '.mec-skin-list-container .mec-load-more-button, .mec-skin-list-container .mec-load-month-link', function () {
  var $container = $j(this).closest('.mec-skin-list-container');
  $container.removeClass('mec-layout-ready');

  setTimeout(function () {
    restructureMecListLayout();
  }, 500);
});

document.querySelectorAll('.ccchildpage').forEach(function (card) {
  var link = card.querySelector('.ccpages_more a');
  if (!link) return;
  var url = link.getAttribute('href');
  card.style.cursor = 'pointer';
  card.addEventListener('click', function (e) {
    if (e.target.closest('a')) return; // let real links (Read more) work normally
    window.location.href = url;
  });
});
