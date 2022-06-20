'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ecosia-clone-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' : 'data-target="#xs-controllers-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' :
                                            'id="xs-controllers-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' : 'data-target="#xs-injectables-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' :
                                        'id="xs-injectables-links-module-AppModule-a09f5b225fa3e2d28b30a4419c8a25c51c3519d489a9837765c0c874d6493af5bea1e770c407945e58c2a982585a4c6259c4fe7ed68af83402b5a428b970944b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' : 'data-target="#xs-controllers-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' :
                                            'id="xs-controllers-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' : 'data-target="#xs-injectables-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' :
                                        'id="xs-injectables-links-module-HealthModule-960838242a351acf1e1c2c5dd2420145e651dd208c81b8cd10325c1fd14d435d135419b68a0d99909a8bc7f9792831e041d3f107a99eb7c95d399633e20f3cba"' }>
                                        <li class="link">
                                            <a href="injectables/HealthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsModule.html" data-type="entity-link" >ProjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' : 'data-target="#xs-controllers-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' :
                                            'id="xs-controllers-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' }>
                                            <li class="link">
                                                <a href="controllers/ProjectsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' : 'data-target="#xs-injectables-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' :
                                        'id="xs-injectables-links-module-ProjectsModule-a05ab216ca71970a2e83ed7b413c3301c03357f33f50ef798a66e4c1d45b4f91d16fbd13e1e9477aa5be77741316f6440fd9c2400cb117f9c24f1184962f9af0"' }>
                                        <li class="link">
                                            <a href="injectables/ProjectsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link" >ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' : 'data-target="#xs-controllers-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' :
                                            'id="xs-controllers-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' }>
                                            <li class="link">
                                                <a href="controllers/ReportsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' : 'data-target="#xs-injectables-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' :
                                        'id="xs-injectables-links-module-ReportsModule-96a585a93c881a2097f7594344807001c548129d47037246caa255ec058fe6af2791394d1bcedcf774b810b8e6a568ca3c6e1478e5fa4cd1b19f72d03899e372"' }>
                                        <li class="link">
                                            <a href="injectables/ReportsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' : 'data-target="#xs-controllers-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' :
                                            'id="xs-controllers-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' : 'data-target="#xs-injectables-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' :
                                        'id="xs-injectables-links-module-TagsModule-683139fd64ae2c06c65ac4432680066af1637b1924d57b167f237e77f430e84d4798725632ebbbec690c8e6f669edd0510bbaf34b06e392498fd8181561ccfd5"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Country.html" data-type="entity-link" >Country</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Investment.html" data-type="entity-link" >Investment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Project.html" data-type="entity-link" >Project</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Report.html" data-type="entity-link" >Report</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ReportToCountry.html" data-type="entity-link" >ReportToCountry</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ReportToInvestment.html" data-type="entity-link" >ReportToInvestment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateHealthDto.html" data-type="entity-link" >CreateHealthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProjectDto.html" data-type="entity-link" >CreateProjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReportDto.html" data-type="entity-link" >CreateReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Health.html" data-type="entity-link" >Health</a>
                            </li>
                            <li class="link">
                                <a href="classes/KeyValuePair.html" data-type="entity-link" >KeyValuePair</a>
                            </li>
                            <li class="link">
                                <a href="classes/Report.html" data-type="entity-link" >Report</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportDto.html" data-type="entity-link" >ReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthDto.html" data-type="entity-link" >UpdateHealthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProjectDto.html" data-type="entity-link" >UpdateProjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReportDto.html" data-type="entity-link" >UpdateReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTagDto.html" data-type="entity-link" >UpdateTagDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});