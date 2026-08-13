/* ============================================================
   MODERN PORTFOLIO — Pintu Kumar Yadav
   ============================================================ */

$(document).ready(function () {

  /* ── Navbar: add scrolled class ── */
  $(window).on('scroll.navbar', function () {
    if ($(this).scrollTop() > 60) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }
    highlightNav();
  });

  /* ── Mobile nav toggle ── */
  $('#nav-toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.nav-links').toggleClass('open');
  });

  /* ── Close mobile nav on link click ── */
  $('.nav-links a').on('click', function () {
    $('#nav-toggle').removeClass('open');
    $('.nav-links').removeClass('open');
  });

  /* ── Smooth scroll for all hash links ── */
  $(document).on('click', 'a[href^="#"]', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      var offset = target.offset().top - 72;
      $('html, body').animate({ scrollTop: offset }, 600, 'swing');
    }
  });

  /* ── Active nav highlight on scroll ── */
  function highlightNav() {
    var scrollPos = $(window).scrollTop() + 100;
    $('section[id]').each(function () {
      var top    = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id     = $(this).attr('id');
      if (scrollPos >= top && scrollPos < bottom) {
        $('.nav-links a').removeClass('active');
        $('.nav-links a[href="#' + id + '"]').addClass('active');
      }
    });
  }

  /* ── Fade-up animation via IntersectionObserver ── */
  if ('IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(
      '.timeline-card, .project-card, .skill-category, ' +
      '.edu-card, .contact-card, .stat-card, .about-grid, ' +
      '.section-header, .contact-form-wrapper'
    ).forEach(function (el) {
      el.classList.add('fade-up');
      fadeObserver.observe(el);
    });
  } else {
    /* Fallback for browsers without IntersectionObserver */
    document.querySelectorAll('.fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Count-up animation ── */
  if ('IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.count').forEach(function (el) {
      countObserver.observe(el);
    });
  }

  /* ── Contact form AJAX submission ── */
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var $form   = $(this);
    var $btn    = $('#formSubmit');
    var $status = $('#formStatus');

    $btn.prop('disabled', true).text('Sending...');
    $status.removeClass('success error').text('');

    fetch($form.attr('action'), {
      method: 'POST',
      body: new FormData($form[0]),
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      if (res.ok) {
        $status.addClass('success').html(
          '<strong>Message sent successfully.</strong><br>Thanks for reaching out — I\'ll get back to you soon.'
        );
        $form[0].reset();
      } else {
        throw new Error('failed');
      }
    })
    .catch(function () {
      $status.addClass('error').text(
        'Something went wrong. Please try again or email me directly.'
      );
    })
    .finally(function () {
      $btn.prop('disabled', false).text('Send Message \u2192');
    });
  });

  function animateCount(el) {
    var target   = parseInt(el.dataset.target, 10);
    var duration = 1800;
    var steps    = Math.max(target, 60);
    var interval = duration / steps;
    var step     = target / steps;
    var current  = 0;

    var timer = setInterval(function () {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, interval);
  }

});
