    // Progress bars
    // $(document).ready(function() {
    //     $('.progress .progress-bar').css("width",
    //               function() {
    //                   return $(this).attr("aria-valuenow") + "%";
    //               }
    //       )
    //   });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tt) {
  return new bootstrap.Tooltip(tt)
})