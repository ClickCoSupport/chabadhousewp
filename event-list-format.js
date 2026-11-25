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



/* Calendar switcher: toggles between the calendar view and list view on the events page. */
document.addEventListener('DOMContentLoaded', function () {
  var calendarView = document.querySelector('.calendar-view');
  var listView = document.querySelector('.list-view');

  // Only run on pages that actually have both views
  if (!calendarView || !listView) return;

  function showCalendar() {
    calendarView.style.display = '';
    listView.style.display = 'none';
  }

  function showList() {
    listView.style.display = '';
    calendarView.style.display = 'none';
  }

  // Initial state: only calendar-view visible
  showCalendar();

  // Use event delegation + href matching, since there are no #list/#calendar IDs
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href="#list"], a[href="#calendar"]');
    if (!link) return;

    e.preventDefault();

    if (link.getAttribute('href') === '#list') {
      showList();
    } else {
      showCalendar();
    }
  });
});
