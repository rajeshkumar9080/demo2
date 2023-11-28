/*! CoreApp v1.4.0 | Copyright by . */


var msg_perform_unable = "undefined" == typeof msg_unable_perform ? "Unable to perform!" : msg_unable_perform,
    msg_is_wrong = "undefined" == typeof msg_wrong ? "Something is Wrong!" : msg_wrong,
    msg_modern_browser = "undefined" == typeof msg_use_modern_browser ? "Please use a modern browser to properly view this template!" : msg_use_modern_browser;

function winwidth() {
    return $(window).width()
}
jQuery.validator.addMethod("greaterThan", function(a, b, c) {
    return /Invalid|NaN/.test(new Date(a)) ? isNaN(a) && isNaN($(c).val()) || +a > +$(c).val() : new Date(a) > new Date($(c).val())
}, "Must be greater than {0}.");

function ajax_form_submit(a = $(".validate-form"), b = !0, c = "ti ti-alert", d = !0) {

    a.find(".form-progress-btn");
    a.each(function() {
        var a = $(this);
        a.validate({
            errorElement: "span",
            errorClass: "input-border-error error",
            submitHandler: function(e) {
                $(e).ajaxSubmit({
                    beforeSubmit: function() {
                        
                           var b = $(".page-overlay");
                            b.addClass("is-loading");
                        console.log("Process has been Initiated");
                    },
                    dataType: "json",
                    success: function(f) {
                        //var g = "success" == f.msg ? "assets/images/feed.png" : c;

                           var b = $(".page-overlay");
                            b.removeClass("is-loading");


                        var heading='Error';
                        var gg ='error';
                        if (f.msg=='success') {
                            heading='Success';
                            gg='success';
                        }
                        if (btn_actived(a.find("button.save-disabled"), !1), swal(heading, f.message, gg), "success" != f.msg) cl(f);
                        else if (!0 === b && $(e).clearForm(), bs_modal_toggle(a, d), f.link) setTimeout(function() {
                            window.location.href = f.link
                        }, 1000);
                        else {
                            var h = $(a);
                            !0 == d && h.hasClass("_reload") && setTimeout(function() {
                                window.location.reload()
                            }, 1000)
                        }
                    },
                    error: function(a, b, c) {
                        cl(c), swal("Warning", msg_is_wrong + "\n(" + c + ")", "error"), cl("Ajax error!!")
                    }
                })
            },
            invalidHandler: function() {}
        })
    })
}

function post_submit(a, b, c = null) {
    
    a && b ? $.post(a, b).done(function(a) {
        return $(".tokenval").tokenValidity() ? void("undefined" != typeof a.modal && a.modal ? c && (c.html(a.modal), init_inside_modal(), 0 < c.children(".modal").length && c.children(".modal").modal("show")) : a.message && (show_toast(a.msg, a.message, a.icon ? a.icon : "ti ti-info-alt"), "success" == a.msg && ("undefined" != typeof a.link && a.link ? setTimeout(function() {
            window.location.href = a.link
        }, 500) : "undefined" != typeof a.reload && a.reload && setTimeout(function() {
            window.location.reload()
        }, 500)))) : (show_toast("error", msg_is_wrong, "ti ti-alert"), !1)
    }).fail(function(a, b, c) {
        _log(a, b, c), show_toast("error", msg_is_wrong + "\n" + c, "ti ti-alert")
    }) : show_toast("error", msg_is_wrong, "ti ti-alert")
}

function ajax_email(a, b) {
    if (a && b) {
        var c = $(".page-overlay");
        c.addClass("d-none"), $.post(a, b).done(function(a) {
            c.removeClass("d-none"), console.log(a)
        }).fail(function(a, b, d) {
            c.removeClass("d-none"), console.log(d)
        })
    } else console.log("wrong-email-configure")
}

function stick_nav_() {
    var a = $(".is-sticky"),
        b = $(".topbar"),
        c = $(".topbar-wrap");
    if (0 < a.length) {
        var d = a.offset();
        $(window).scroll(function() {
            var e = $(window).scrollTop(),
                f = b.height();
            e > d.top ? !a.hasClass("has-fixed") && (a.addClass("has-fixed"), c.css("padding-top", f)) : a.hasClass("has-fixed") && (a.removeClass("has-fixed"), c.css("padding-top", 0))
        })
    }
}

function data_percent_() {
    var a = $("[data-percent]");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = a.data("percent");
        a.css("width", b + "%")
    })
}

function countdown_() {
    var a = $(".countdown-clock");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = a.attr("data-date");
        a.countdown(b).on("update.countdown", function(a) {
            $(this).html(a.strftime("<div><span class=\"countdown-time countdown-time-first\">%D</span><span class=\"countdown-text\">Day</span></div><div><span class=\"countdown-time\">%H</span><span class=\"countdown-text\">Hour</span></div><div><span class=\"countdown-time\">%M</span><span class=\"countdown-text\">Min</span></div><div><span class=\"countdown-time countdown-time-last\">%S</span><span class=\"countdown-text\">Sec</span></div>"))
        })
    })
}

function selects_() {
    var a = $(".select");
    0 < a.length && a.each(function() {
        var a = $(this).data("dd-class") ? $(this).data("dd-class") : "";
        $(this).select2({
            theme: "flat",
            dropdownCssClass: a
        })
    });
    var b = $(".select-flat");
    0 < b.length && b.each(function() {
        var a = $(this).data("dd-class") ? $(this).data("dd-class") : "";
        $(this).select2({
            theme: "flat",
            dropdownCssClass: a
        })
    });
    var c = $(".select-bordered");
    0 < c.length && c.each(function() {
        var a = $(this).data("dd-class") ? $(this).data("dd-class") : "";
        $(this).select2({
            theme: "flat bordered",
            dropdownCssClass: a
        })
    })
}

function toggle_content_() {
    var a = $(".toggle-content-tigger");
    0 < a.length && a.on("click", function(a) {
        var b = $(this);
        b.toggleClass("active").parent().find(".toggle-content").slideToggle(), a.preventDefault()
    })
}

function toggle_tigger_() {
    0 < $(".toggle-tigger").length && $(document).on("click", ".toggle-tigger", function(a) {
        var b = $(this);
        $(".toggle-tigger").not(b).removeClass("active"), $(".toggle-class").not(b.parent().children()).removeClass("active"), b.toggleClass("active").parent().find(".toggle-class").toggleClass("active"), a.preventDefault()
    }), $(document).on("click", "body", function(a) {
        var b = $(".toggle-tigger"),
            c = $(".toggle-class");
        c.is(a.target) || 0 !== c.has(a.target).length || b.is(a.target) || 0 !== b.has(a.target).length || (c.removeClass("active"), b.removeClass("active"))
    })
}

function activeNav(a) {
    991 > winwidth() ? a.delay(500).addClass("navbar-mobile") : a.delay(500).removeClass("navbar-mobile")
}

function toggle_nav_() {
    var a = $(".toggle-nav"),
        b = $(".navbar");
    0 < a.length && a.on("click", function(c) {
        a.toggleClass("active"), b.toggleClass("active"), c.preventDefault()
    }), $(document).on("click", "body", function(c) {
        a.is(c.target) || 0 !== a.has(c.target).length || b.is(c.target) || 0 !== b.has(c.target).length || (a.removeClass("active"), b.removeClass("active"))
    }), activeNav(b), $(window).on("resize", function() {
        activeNav(b)
    })
}

function tooltip_() {
    var a = $("[data-toggle=\"tooltip\"]");
    0 < a.length && a.tooltip()
}

function date_time_picker_() {
    var a = $(".date-picker"),
        b = $(".date-picker-dob"),
        c = $(".time-picker");
    0 < a.length && a.each(function() {
        var a = "alt" == $(this).data("format") ? "dd-mm-yyyy" : "mm/dd/yyyy";
        $(this).datepicker({
            format: a,
            maxViewMode: 2,
            clearBtn: !0,
            autoclose: !0,
            todayHighlight: !0
        })
    }), 0 < b.length && b.each(function() {
        var a = "alt" == $(this).data("format") ? "dd-mm-yyyy" : "mm/dd/yyyy";
        $(this).datepicker({
            format: a,
            startView: 2,
            maxViewMode: 2,
            clearBtn: !0,
            autoclose: !0
        })
    });
    var d = $(".custom-date-picker");
    0 < d.length && d.each(function() {
        var a = "alt" == $(this).data("format") ? "dd-mm-yyyy" : "mm/dd/yyyy";
        $(this).datepicker({
            format: a,
            maxViewMode: 2,
            clearBtn: !0,
            autoclose: !0,
            todayHighlight: !0,
            startDate: new Date
        })
    }), 0 < c.length && c.each(function() {
        $(this).parent().addClass("has-timepicker"), $(this).timepicker({
            timeFormat: "hh:mm p",
            interval: 15,
            change: function() {
                btn_actived($(this).closest("form").find("button[type=submit]"))
            }
        })
    })
}

function knob_() {
    var a = $(".knob");
    0 < a.length && a.each(function() {
        $(this).knob({
            readOnly: !0,
            displayInput: !1
        })
    })
}

function switch_link(a, b, c) {
    0 < a.length && a.each(function() {
        "add" === c && $(this).data("switch") === b.data("switch") && $(this).addClass("link-disable"), "remove" === c && $(this).data("switch") === b.data("switch") && $(this).removeClass("link-disable")
    })
}

function switch_toggle_() {
    var a = $(".switch-toggle"),
        b = $(".switch-toggle-link");
    0 < a.length && a.each(function() {
        $(this).on("change", function() {
            var a = $(this),
                c = a.data("switch");
            a.is(":checked") ? ($(".switch-content." + c).addClass("switch-active").slideDown(300), switch_link(b, $(this), "remove")) : !a.is(":checked") && ($(".switch-content." + c).removeClass("switch-active").slideUp(300), switch_link(b, $(this), "add"))
        }), $(this).is(":checked") ? ($(".switch-content." + $(this).data("switch")).addClass("switch-active").slideDown(100), switch_link(b, $(this), "remove")) : ($(".switch-content." + $(this).data("switch")).removeClass("switch-active").slideUp(100), switch_link(b, $(this), "add"))
    }), 0 < b.length && b.each(function() {
        $(this).on("click", function(a) {
            var b = $(this),
                c = b.data("switch");
            if (b.hasClass("link-disable")) return !1;
            $(this).toggleClass("active"), $(".switch-content." + c).toggleClass("switch-active").slideToggle(300);
            a.preventDefault()
        })
    })
}

function input_file_() {
    var a = $(".input-file");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = $(this).next(),
            c = b.text();
        a.on("change", function() {
            var d = a.val();
            b.html(d), b.is(":empty") && b.html(c)
        })
    })
}

function image_popop_() {
    var a = $(".image-popup");
    0 < a.length && a.magnificPopup({
        type: "image",
        preloader: !0,
        removalDelay: 400,
        mainClass: "mfp-fade"
    })
}

function copytoclipboard(a, b, c) {
    var d = document.queryCommandSupported("copy"),
        e = a,
        f = b;
    e.parent().find(f).removeAttr("disabled").select(), !0 === d ? (document.execCommand("copy"), c.text("Copied to Clipboard").fadeIn().delay(1e3).fadeOut(), e.parent().find(f).attr("disabled", "disabled")) : window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text)
}

function feedback(a, b) {
    "success" === b ? $(a).parent().find(".copy-feedback").text("Copied to Clipboard").fadeIn().delay(1e3).fadeOut() : $(a).parent().find(".copy-feedback").text("Faild to Copy").fadeIn().delay(1e3).fadeOut()
}

function datatable_() {
    var a = $(".dt-init");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = a.data("items") ? a.data("items") : 5;
        a.DataTable({
            ordering: !1,
            autoWidth: !1,
            dom: "<t><\"row align-items-center\"<\"col-sm-6 text-left\"p><\"col-sm-6 text-sm-right\"i>>",
            pageLength: b,
            pagingType: "simple",
            bPaginate: $(".data-table tbody tr").length > b,
            iDisplayLength: b,
            language: {
                search: "",
                searchPlaceholder: "Type in to Search",
                info: "_START_ -_END_ of _TOTAL_",
                infoEmpty: "No records",
                infoFiltered: "( Total _MAX_  )",
                paginate: {
                    first: "First",
                    last: "Last",
                    next: "Next",
                    previous: "Prev"
                }
            }
        })
    });
    var b = $(".dt-filter-init");
    0 < b.length && b.each(function() {
        var a = $(this),
            b = a.data("items") ? a.data("items") : 6,
            c = a.DataTable({
                ordering: !1,
                autoWidth: !1,
                dom: "<\"row justify-content-between pdb-1x\"<\"col-9 col-sm-6 text-left\"f><\"col-3 text-right\"<\"data-table-filter relative d-inline-block\">>><t><\"row align-items-center\"<\"col-sm-6 text-left\"p><\"col-sm-6 text-sm-right\"i>>",
                pageLength: b,
                pagingType: "simple",
                bPaginate: $(".data-table tbody tr").length > b,
                iDisplayLength: b,
                language: {
                    search: "",
                    searchPlaceholder: "Type in to Search",
                    info: "_START_ -_END_ of _TOTAL_",
                    infoEmpty: "No records",
                    infoFiltered: "( Total _MAX_  )",
                    paginate: {
                        first: "First",
                        last: "Last",
                        next: "Next",
                        previous: "Prev"
                    }
                }
            }),
            d = $(".data-filter");
        d.on("change", function() {
            var a = $(this).attr("name") && "filter" != $(this).attr("name") ? $(this).attr("name") : "filter-data",
                b = $(this).val();
            console.log(a, b), c.columns("." + a).search(b ? b : "", !0, !1).draw()
        })
    })
}

 function getData()
 {
            $.ajax({
                type: 'GET',
                url: 'farming-coin-price',
                success: function(data){
                    console.log(data);
                    $('#output').html(data);
                }
            });
}


function modal_fix() {
    var a = $(".modal"),
        b = $("body");
    a.on("shown.bs.modal", function() {
        b.hasClass("modal-open") || b.addClass("modal-open")
    })
}

function drop_toggle_() {
    var a = $(".drop-toggle");
    0 < a.length && a.on("click", function(a) {
        991 > winwidth() && ($(this).parent().children(".navbar-dropdown").slideToggle(400), $(this).parent().siblings().children(".navbar-dropdown").slideUp(400), $(this).parent().toggleClass("current"), $(this).parent().siblings().removeClass("current"), a.preventDefault())
    })
}

function form_validate_() {

   

    var a = $(".form-validate");
    0 < a.length && a.each(function() {
        var a = $(this);
        a.validate()
    })
}

function cl() {}
const _log = (...a) => {
    for (var b of a) console.log(b)
};

function btn_actived(a, b = !0) {
    0 < a.length && (!0 === b ? $(a).removeAttr("disabled") : $(a).attr("disabled", !0))
}

function bs_modal_toggle(a, b = !0) {
    var c = a.parents("div.modal");
    0 < c.length && b && c.modal("toggle")
}

function bs_modal_hide(a, b = "hide", c = ".modal") {
    0 < $(a).parents(c).length && $(a).parents(c).modal(b)
}

function toggle_section_modal_() {
    var a = $(".toggle-tigger");
    0 < a.length && a.on("click", function(a) {
        var b = $(this);
        b.toggleClass("active").parent().find(".toggle-content").slideToggle(), a.preventDefault()
    })
}

function init_inside_modal() {
    tooltip_(), toggle_content_(), data_percent_(), selects_()
}

function randString(a) {
    var b = $(a).attr("data-character-set").split(","),
        c = "";
    0 <= $.inArray("a-z", b) && (c += "abcdefghijklmnopqrstuvwxyz"), 0 <= $.inArray("A-Z", b) && (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0 <= $.inArray("0-9", b) && (c += "0123456789"), 0 <= $.inArray("#", b) && (c += "![]{}()%&*$#^<>~@|");
    for (var d = "", e = 0; e < $(a).attr("data-size"); e++) d += c.charAt(Math.floor(Math.random() * c.length));
    return d
}

function show_toast(a, b, c = "ti ti-filter") {
    toastr.options = {
        closeButton: !0,
        positionClass: "toast-bottom-right"
    }, toastr[a]("<em class=\"toast-message-icon " + c + "\"></em> " + b)
}

function show_alert(a, b, c = ".msg-box", d = 2500) {
    var e = $(c);
    e.html("<div class=\"alert alert-" + a + " alert-dismissible fade show\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&nbsp;</span></button>" + b + "</div>"), setTimeout(function() {
        e.empty()
    }, d)
}

function store(a, b) {
    "undefined" == typeof Storage ? window.alert(msg_modern_browser) : localStorage.setItem(a, b)
}

function get(a) {
    return "undefined" == typeof Storage ? void window.alert(msg_modern_browser) : localStorage.getItem(a)
}(function(a) {
    //'use strict';

    
    var b = a("body"),
        c = a(document),
        d = a("#ajax-modal"),
        e = a(".close-modal"),
        f = a(".modal-backdrop");
    "ontouchstart" in document.documentElement || b.addClass("no-touch"), stick_nav_(), data_percent_(), countdown_(), selects_(), toggle_content_(), toggle_tigger_(), toggle_nav_(), tooltip_(), date_time_picker_(), knob_(), switch_toggle_(), input_file_(), image_popop_(), datatable_(), modal_fix(), drop_toggle_(), form_validate_();
    var g = new ClipboardJS(".copy-clipboard");
    
    
    
    
    g.on("success", function(a) {
        feedback(a.trigger, "success"), a.clearSelection()
    }).on("error", function(a) {
        feedback(a.trigger, "fail")
    });
    
    
    
    
    var h = window.location.href,
        i = a(".navbar a");
    0 < i.length && i.each(function() {
        
        h === this.href && a(this).closest("li").addClass("active").parent().closest("li").addClass("active")
        
    }), a.ajaxSetup({

        headers: {
            "X-CSRF-TOKEN": a("meta[name=\"csrf-token\"]").attr("content"),
            "X-TOKEN-SECRET": a("meta[name=\"site-token\"]").attr("content")
        }
    
    }), 
    c.ajaxStart(function() {
        console.log("initiating")
        //b.preloadr(1)
    }), c.ajaxStop(function() {
        console.log("initiating1")
        //b.preloadr(0)
    }), e.on("click", function(b) {
        b.preventDefault(), a(this).parents(".modal").modal("hide"), f.remove()
    })
})(jQuery);