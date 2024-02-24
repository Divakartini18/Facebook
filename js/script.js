// Icon
function showIcon() {
    $('#search-icon').show()
}

function hideIcon() {
    $('#search-icon').hide();
}

// Button
function showButton() {
    $('#btn-post').show();
}

function postIt() {
    alert('Completed');
    $('#btn-post').hide();
}

//  Menu Modal
function menuModal() {
    let menuStatus = $('#menu-modal').css('display');
    let accountStatus = $('#account-modal').css('display');

    if (menuStatus == 'block') {
        $('#menu-modal').hide();
        $('#icon').attr('src', './image/gnb/6.png');
        $('#icon').removeClass('icon-active');
    } else {
        if (accountStatus == 'block') {
            $('#account-modal').hide();
            $('#icon').attr('src', './image/gnb/10.png');
            $('#icon').addClass('icon-active');
        }
        $('#menu-modal').show();
        $('#icon').attr('src', './image/gnb/10.png');
        $('#icon').addClass('icon-active');
    }
}

function accountModal() {
    let menuStatus = $('#menu-modal').css('display');
    let accountStatus = $('#account-modal').css('display');

    if (accountStatus == 'block') {
        $('#account-modal').hide();
    } else {
        if (menuStatus == 'block') {
            $('#menu-modal').hide();
            $('#icon').attr('src', './image/gnb/6.png');
            $('#icon').removeClass('icon-active');
        }
        $('#account-modal').show();
        $('#icon').attr('src', './image/gnb/6.png');
        $('#icon').removeClass('icon-active');
    }
}
