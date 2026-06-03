document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.mec-event-list-minimal .mec-event-article').forEach(function(article) {

        if (article.querySelector('.mec-minimal-row')) return;

        const leftCol = article.querySelector('.col-md-9.col-sm-9');
        const rightCol = article.querySelector('.col-md-3.col-sm-3');

        if (!leftCol || !rightCol) return;

        const date = leftCol.querySelector('.mec-event-date');
        const time = leftCol.querySelector('.mec-time-details');
        const title = leftCol.querySelector('.mec-event-title');
        const detail = leftCol.querySelector('.mec-event-detail');

        if (!date || !time || !title) return;

        /* DATE */
        const dateWrap = document.createElement('div');
        dateWrap.className = 'mec-minimal-date-wrap';
        dateWrap.appendChild(date);

        /* TIME + TITLE */
        const headingWrap = document.createElement('div');
        headingWrap.className = 'mec-minimal-heading-wrap';
        headingWrap.appendChild(time);
        headingWrap.appendChild(title);

        /* TEXT AREA */
        const textWrap = document.createElement('div');
        textWrap.className = 'mec-minimal-text-wrap';
        textWrap.appendChild(headingWrap);
        if (detail) textWrap.appendChild(detail);

        /* CONTENT + BUTTON */
        const contentWrap = document.createElement('div');
        contentWrap.className = 'mec-minimal-content-wrap';
        contentWrap.appendChild(textWrap);
        contentWrap.appendChild(rightCol);

        /* FULL ROW */
        const rowWrap = document.createElement('div');
        rowWrap.className = 'mec-minimal-row';
        rowWrap.appendChild(dateWrap);
        rowWrap.appendChild(contentWrap);

        article.innerHTML = '';
        article.appendChild(rowWrap);

    });
});




function updateMecButtons() {
  document
    .querySelectorAll('.mec-event-list-minimal .btn-wrapper .mec-detail-button')
    .forEach(function(btn) {
      if (btn.textContent.trim() !== 'View Details') {
        btn.textContent = 'View Details';
      }
    });
}

document.addEventListener('DOMContentLoaded', function () {
  updateMecButtons();
});


$j = jQuery.noConflict();

$j(document).ready(function () {

    const clickableSelectors = [
        ".mec-event-list-minimal > article",
        ".cta-calendar",
        ".elementor-widget-icon-box"
    ].join(",");

    $j(clickableSelectors).on("click", function (e) {

        // if user clicked an actual link, let it behave normally
        if ($j(e.target).closest("a").length) return;

        // find first link inside the container
        var link = $j(this).find("a").first().attr("href");

        if (link) {
            window.location.href = link;
        }
    });

    $j(clickableSelectors).css('cursor', 'pointer');

});
