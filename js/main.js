//load page
$(window).on("load", function () {
    $("#preloader").delay(600).fadeOut();
    new WOW().init();
});
//search animation
$('.header').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');
    $(selector).toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');
    $('.search-box').slideToggle();
    e.preventDefault();
});

// $('.search-toggle').click(function(){
//    $('.search-box').slideToggle();
// });

//menu on mobile show
$('.navicon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('navicon--active');
    $('.toggle-show-screen').toggleClass('toggle--active');
});
//form of cv for education
$('.edit-pen-1').click(function () {
    $(".show-element-1").removeClass('hide-section');
    $(".edit-pen-1").addClass('hide-section');
    $(".label-check-1").addClass('checkbox-custom-label');
});
$('.cancel-select-1').click(function () {
    $(".show-element-1").addClass('hide-section');
    $(".edit-pen-1").removeClass('hide-section');
    $(".label-check-1").removeClass('checkbox-custom-label');
    $(".add-new-1").addClass('hide-section');
});
$('.add-new-button-1').click(function () {
    $(".add-new-1").removeClass('hide-section');
});
var boxes1 = $('.checkbox-custom-1');
boxes1.on('change', function () {
    $('.delete-select-1').toggleClass("delete-active", boxes1.is(":checked"));
});
//form of cv for work
$('.edit-pen-2').click(function () {
    $(".show-element-2").removeClass('hide-section');
    $(".edit-pen-2").addClass('hide-section');
    $(".label-check-2").addClass('checkbox-custom-label');
});
$('.cancel-select-2').click(function () {
    $(".show-element-2").addClass('hide-section');
    $(".edit-pen-2").removeClass('hide-section');
    $(".label-check-2").removeClass('checkbox-custom-label');
    $(".add-new-2").addClass('hide-section');
});
$('.add-new-button-2').click(function () {
    $(".add-new-2").removeClass('hide-section');
});
var boxes2 = $('.checkbox-custom-2');
boxes2.on('change', function () {
    $('.delete-select-2').toggleClass("delete-active", boxes2.is(":checked"));
});
//form of cv for personal skills
$('.edit-pen-3').click(function () {
    $(".show-element-3").removeClass('hide-section');
    $(".edit-pen-3").addClass('hide-section');
    $(".label-check-3").addClass('checkbox-custom-label');
});
$('.cancel-select-3').click(function () {
    $(".show-element-3").addClass('hide-section');
    $(".edit-pen-3").removeClass('hide-section');
    $(".label-check-3").removeClass('checkbox-custom-label');
    $(".add-new-3").addClass('hide-section');
});
$('.add-new-button-3').click(function () {
    $(".add-new-3").removeClass('hide-section');
});
var boxes3 = $('.checkbox-custom-3');
boxes3.on('change', function () {
    $('.delete-select-3').toggleClass("delete-active", boxes3.is(":checked"));
});
// form animation on mobile screen
$('.user_unregistered-signup').click(function () {
    $(".user_options-unregistered-mobile").addClass('hide-section');
    $(".user_options-registered-mobile").removeClass('hide-section');
});
$('.user_registered-login').click(function () {
    $(".user_options-unregistered-mobile").removeClass('hide-section');
    $(".user_options-registered-mobile").addClass('hide-section');
});
$('.change-view-1').click(function () {
    $(".change-view-2").removeClass('active-grid');
    $(".change-view-1").addClass('active-grid');
});
$('.change-view-2').click(function () {
    $(".change-view-2").addClass('active-grid');
    $(".change-view-1").removeClass('active-grid');
});
//form of cv for awards
$('.edit-pen-4').click(function () {
    $(".show-element-4").removeClass('hide-section');
    $(".edit-pen-4").addClass('hide-section');
    $(".label-check-4").addClass('checkbox-custom-label');
});
$('.cancel-select-4').click(function () {
    $(".show-element-4").addClass('hide-section');
    $(".edit-pen-4").removeClass('hide-section');
    $(".label-check-4").removeClass('checkbox-custom-label');
    $(".add-new-4").addClass('hide-section');
});
$('.add-new-button-4').click(function () {
    $(".add-new-4").removeClass('hide-section');
});
var boxes4 = $('.checkbox-custom-4');
boxes4.on('change', function () {
    $('.delete-select-4').toggleClass("delete-active", boxes4.is(":checked"));
});
// progress bar of skills
$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});
$(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});



// grid view
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('.recommended-view .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('.recommended-view .item').removeClass('list-group-item');$('.recommended-view .item').addClass('grid-group-item');});
});
//progress bar
    $('.progress-confirm .done .label').html('&#10003;');
//login form
const signupButton = document.getElementById("signup-button"),
    loginButton = document.getElementById("login-button"),
    userForms = document.getElementById("user_options-forms");
signupButton.addEventListener(
    "click",
    ()=>{
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
    },
    false
);
loginButton.addEventListener(
    "click",
    () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
    },
    false
);
const signupButtonsmall = document.getElementById("signup-button-small"),
    loginButtonsmall = document.getElementById("login-button-small"),
    userFormsmall = document.getElementById("user_options-forms");
signupButtonsmall.addEventListener(
    "click",
    ()=>{
        userFormsmall.classList.remove("bounceRight");
        userFormsmall.classList.add("bounceLeft");
    },
    false
);
loginButtonsmall.addEventListener(
    "click",
    () => {
        userFormsmall.classList.remove("bounceLeft");
        userFormsmall.classList.add("bounceRight");
    },
    false
);
$('.forget-pass a').click(function () {
    $(".login-form-show").addClass('hide-section');
    $(".forget-form-show").removeClass('hide-section');
});
$('.confirm-password').click(function () {
    $(".forget-form-show").addClass('hide-section');
    $(".new-form-show").removeClass('hide-section');
    return false;
});

$('.backToEnterEmail').click(function () {
    $(".forget-form-show").removeClass('hide-section');
    $(".new-form-show").addClass('hide-section');
    return false;
});

$('.backToMainLogin').click(function () {
    $(".login-form-show").removeClass('hide-section');
    $(".forget-form-show").addClass('hide-section');
    return false;
});




