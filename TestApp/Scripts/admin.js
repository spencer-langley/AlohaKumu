$(
function () {
    $('#user_controls').hide();
    $('#settings_controls').hide();
    $('#words_controls').hide();
    $('#resultsTab').addClass('selectedTab');

    $('#usersTab').click(function () {
        $('#results_controls').hide();
        $('#settings_controls').hide();
        $('#words_controls').hide();
        $('#user_controls').show();

        $('#usersTab').addClass('selectedTab');
        $('#settingsTab').removeClass('selectedTab');
        $('#wordsTab').removeClass('selectedTab');
        $('#resultsTab').removeClass('selectedTab');
    });
    $('#settingsTab').click(function () {
        $('#results_controls').hide();
        $('#settings_controls').show();
        $('#words_controls').hide();
        $('#user_controls').hide();

        $('#usersTab').removeClass('selectedTab');
        $('#settingsTab').addClass('selectedTab');
        $('#wordsTab').removeClass('selectedTab');
        $('#resultsTab').removeClass('selectedTab');
    });
    $('#wordsTab').click(function () {
        $('#results_controls').hide();
        $('#settings_controls').hide();
        $('#words_controls').show();
        $('#user_controls').hide();

        $('#usersTab').removeClass('selectedTab');
        $('#settingsTab').removeClass('selectedTab');
        $('#wordsTab').addClass('selectedTab');
        $('#resultsTab').removeClass('selectedTab');
    });
    $('#resultsTab').click(function () {
        $('#results_controls').show();
        $('#settings_controls').hide();
        $('#words_controls').hide();
        $('#user_controls').hide();

        $('#usersTab').removeClass('selectedTab');
        $('#settingsTab').removeClass('selectedTab');
        $('#wordsTab').removeClass('selectedTab');
        $('#resultsTab').addClass('selectedTab');
    });
    $('#studyResultsPanel').change(updateControlPanel);
    $('#userResultsPanel').change(updateControlPanel);
}
);

function updateControlPanel() {
    var block = {
        studyID: $('#studyResultsPanel').val(),
        userID: $('#userResultsPanel').val()
    };
    if (block.studyID == "n/a" || block.userID == "n/a") {
        $('#dataView').replaceWith('<div class="subpanel" id="dataView">Select a study and user.</div>');
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Ajax/adminPanel/",
            dataType: "html",
            data: block,
            success: function (result) {
                $('#dataView').replaceWith(result);
            }
        });
    }
}