document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* ==========================================================================
     *    UI CONTROLLERS & SELECTIONS
     *    ========================================================================== */
    const headerElement = document.querySelector('.site-header');
    const mobileToggleBtn = document.querySelector('.mobile-toggle');
    const primaryNavDrawer = document.querySelector('.main-navigation');
    const globalMenuBackdrop = document.getElementById('menu-backdrop');
    const navItemLinks = document.querySelectorAll('.nav-item, .nav-btn-mobile');
    const consultationForm = document.getElementById('consultation-form');

    /* ==========================================================================
     *    HIGH-PERFORMANCE INTERSECTION ENGINE (SCROLL REVEALS)
     *    ========================================================================== */
    const revealOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Unobserves individual elements post-animation to conserve operational resources
                observer.unobserve(entry.target);
            }
        });
    };

    const globalRevealObserver = new IntersectionObserver(revealCallback, revealOptions);
    const elementsToReveal = document.querySelectorAll('.scroll-reveal');

    elementsToReveal.forEach(element => {
        globalRevealObserver.observe(element);
    });

    /* ==========================================================================
     *    NAVIGATION RESPONSIVE LIFECYCLE
     *    ========================================================================== */
    const toggleMobileMenu = () => {
        const isDrawerExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';

        // Synchronized state modifications
        mobileToggleBtn.setAttribute('aria-expanded', !isDrawerExpanded);
        mobileToggleBtn.classList.toggle('toggle-active');
        primaryNavDrawer.classList.toggle('drawer-active');
        globalMenuBackdrop.classList.toggle('backdrop-active');

        // Locks parent document structural window scroll to block underlying bounce anomalies
        document.body.style.overflow = !isDrawerExpanded ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        mobileToggleBtn.classList.remove('toggle-active');
        primaryNavDrawer.classList.remove('drawer-active');
        globalMenuBackdrop.classList.remove('backdrop-active');
        document.body.style.overflow = '';
    };

    mobileToggleBtn.addEventListener('click', toggleMobileMenu);
    globalMenuBackdrop.addEventListener('click', closeMobileMenu);

    // Structural closure trap execution when link nodes are triggered
    navItemLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    /* ==========================================================================
     *    HEADER LAYOUT OPTIMIZATION (SCROLL MONITOR)
     *    ========================================================================== */
    let optimalDebounceTimeout;

    const monitorScrollState = () => {
        if (window.scrollY > 50) {
            headerElement.classList.add('scrolled-state');
        } else {
            headerElement.classList.remove('scrolled-state');
        }
    };

    window.addEventListener('scroll', () => {
        // Leverages low-overhead native scheduling loops
        if (optimalDebounceTimeout) {
            window.cancelAnimationFrame(optimalDebounceTimeout);
        }
        optimalDebounceTimeout = window.requestAnimationFrame(monitorScrollState);
    }, { passive: true }); // Passive flags guarantee absolute smooth scroll execution frame integrity

    /* ==========================================================================
     *    FAULT-TOLERANT FORM VALIDATION SUITE
     *    ========================================================================== */
    const clearFieldError = (inputField) => {
        const containerGroup = inputField.closest('.field-element');
        if (containerGroup) {
            containerGroup.classList.remove('validation-error');
            const errorElement = containerGroup.querySelector('.error-msg');
            if (errorElement) errorElement.textContent = '';
        }
    };

    const displayFieldError = (inputField, operationalErrorMessage) => {
        const containerGroup = inputField.closest('.field-element');
        if (containerGroup) {
            containerGroup.classList.add('validation-error');
            const errorElement = containerGroup.querySelector('.error-msg');
            if (errorElement) errorElement.textContent = operationalErrorMessage;
        }
    };

    const processFormSubmission = (event) => {
        event.preventDefault();
        let isFormPayloadClean = true;
        const inputElementsToValidate = consultationForm.querySelectorAll('input[required]');

        inputElementsToValidate.forEach(input => {
            clearFieldError(input);

            // Native state validation checks
            if (!input.validity.valid) {
                isFormPayloadClean = false;
                if (input.validity.valueMissing) {
                    displayFieldError(input, `This field is mandatory.`);
                } else if (input.validity.typeMismatch && input.type === 'email') {
                    displayFieldError(input, 'Please input a secure, valid email syntax structure.');
                } else {
                    displayFieldError(input, 'Invalid entry state.');
                }
            }
        });

        if (isFormPayloadClean) {
            const submitButton = consultationForm.querySelector('.form-submit-btn');
            const originalButtonLabel = submitButton.innerHTML;

            // Immediate feedback interaction switch
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Processing Encrypted Transmission...</span>';

            // Simulates clean network delivery processing sequences
            setTimeout(() => {
                alert('Project configuration transmission received successfully. An architectural partner will establish contact securely.');
                consultationForm.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonLabel;
            }, 1800);
        }
    };

    if (consultationForm) {
        consultationForm.addEventListener('submit', processFormSubmission);

        // Active dynamic error clearing listeners
        consultationForm.querySelectorAll('input, textarea').forEach(element => {
            element.addEventListener('input', (e) => {
                if (e.target.validity.valid) {
                    clearFieldError(e.target);
                }
            });
        });
    }
});
