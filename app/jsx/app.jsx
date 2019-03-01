
// ##### eScholarship UI Library ##### //

// ***** Polyfills ***** //

if (!(typeof document === "undefined")) {
  require('babel-polyfill') // required for IE11
  require('details-polyfill')
  require('intersection-observer')
  require('smoothscroll-polyfill').polyfill();
}

// ***** React ***** //

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'

// ***** Stylesheets ***** //

import '../scss/main.scss'
import '../../node_modules/flickity/dist/flickity.min.css'

// ***** Components ***** //

import AboutLayout from './layouts/AboutLayout.jsx'
import AlertDisp from './display/AlertDisp.jsx'
import AuthorListDisp from './display/AuthorListDisp.jsx'
import BreadcrumbDisp from './display/BreadcrumbDisp.jsx'
import BrowseCampusesLayout from './layouts/BrowseCampusesLayout.jsx'
import BrowseDepartmentsLayout from './layouts/BrowseDepartmentsLayout.jsx'
import BrowseJournalsLayout from './layouts/BrowseJournalsLayout.jsx'
import ButtonDisp from './display/ButtonDisp.jsx'
import CampusLayout from './layouts/CampusLayout.jsx'
import CampusCarouselFrameDisp from './display/CampusCarouselFrameDisp.jsx'
import CampusHeroDisp from './display/CampusHeroDisp.jsx'
import CampusSearchDisp from './display/CampusSearchDisp.jsx'
import ColumnBoxDisp from './display/ColumnBoxDisp.jsx'
import ColumnsDisp from './display/ColumnsDisp.jsx'
import CheckboxDisp from './display/CheckboxDisp.jsx'
import CustomSelectorDisp from './display/CustomSelectorDisp.jsx'
import DataTableDisp from './display/DataTableDisp.jsx'
import DateRangeDisp from './display/DateRangeDisp.jsx'
import DescriptionListDisp from './display/DescriptionListDisp.jsx'
import DivideContentDisp from './display/DivideContentDisp.jsx'
import DownloadDisp from './display/DownloadDisp.jsx'
import Error404Layout from './layouts/Error404Layout.jsx'
import ExportDisp from './display/ExportDisp.jsx'
import FacetBoxDisp from './display/FacetBoxDisp.jsx'
import FilterDisp from './display/FilterDisp.jsx'
import Home from './display/Home.jsx'
import HomeSectionsDisp from './display/HomeSectionsDisp.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import FooterDisp from './display/FooterDisp.jsx'
import Header1Disp from './display/Header1Disp.jsx'
import Header2Disp from './display/Header2Disp.jsx'
import HeadingDisp from './display/HeadingDisp.jsx'
import HeroDisp from './display/HeroDisp.jsx'
import InfoPagesDisp from './display/InfoPagesDisp.jsx'
import InputDisp from './display/InputDisp.jsx'
import IssueDisp from './display/IssueDisp.jsx'
import ItemActionsDisp from './display/ItemActionsDisp.jsx'
import ItemUnavailableDisp from './display/ItemUnavailableDisp.jsx'
import JournalDisp from './display/JournalDisp.jsx'
import JournalCarouselDisp from './display/JournalCarouselDisp.jsx'
import JournalGridDisp from './display/JournalGridDisp.jsx'
import JournalItemHtmlLayout from './layouts/JournalItemHtmlLayout.jsx'
import JournalItemMultimediaLayout from './layouts/JournalItemMultimediaLayout.jsx'
import JournalItemPdfLayout from './layouts/JournalItemPdfLayout.jsx'
import JournalInfoDisp from './display/JournalInfoDisp.jsx'
import JournalSimpleLayout from './layouts/JournalSimpleLayout.jsx'
import JournalSplashyLayout from './layouts/JournalSplashyLayout.jsx'
import JumpDisp from './display/JumpDisp.jsx'
import LanguageDisp from './display/LanguageDisp.jsx'
import LazyImageDisp from './display/LazyImageDisp.jsx'
import MarqueeDisp from './display/MarqueeDisp.jsx'
import MediaFeatureDisp from './display/MediaFeatureDisp.jsx'
import MediaFileDisp from './display/MediaFileDisp.jsx'
import MediaFileGridDisp from './display/MediaFileGridDisp.jsx'
import MediaListDisp from './display/MediaListDisp.jsx'
import MediaViewerDisp from './display/MediaViewerDisp.jsx'
import ModalDisp from './display/ModalDisp.jsx'
import NavDisp from './display/NavDisp.jsx'
import NavBarDisp from './display/NavBarDisp.jsx'
import PaginationDisp from './display/PaginationDisp.jsx'
import PdfViewDisp from './display/PdfViewDisp.jsx'
import PubInfoDisp from './display/PubInfoDisp.jsx'
import PubDataDisp from './display/PubDataDisp.jsx'
import PubDisp from './display/PubDisp.jsx'
import PubLocationDisp from './display/PubLocationDisp.jsx'
import PubPreviewDisp from './display/PubPreviewDisp.jsx'
import PubYearDisp from './display/PubYearDisp.jsx'
import RefineDisp from './display/RefineDisp.jsx'
import RelatedItemsDisp from './display/RelatedItemsDisp.jsx'
import ScholWorksDisp from './display/ScholWorksDisp.jsx'
import SearchLayout from './layouts/SearchLayout.jsx'
import Search1Disp from './display/Search1Disp.jsx'
import Search2Disp from './display/Search2Disp.jsx'
import SeriesItemEmbargoedLayout from './layouts/SeriesItemEmbargoedLayout.jsx'
import SeriesItemUrlLayout from './layouts/SeriesItemUrlLayout.jsx'
import SeriesItemWithdrawnLayout from './layouts/SeriesItemWithdrawnLayout.jsx'
import ServerErrorDisp from './display/ServerErrorDisp.jsx'
import ShareDisp from './display/ShareDisp.jsx'
import SkipNavDisp from './display/SkipNavDisp.jsx'
import SocialFeedDisp from './display/SocialFeedDisp.jsx'
import SocialIconsDisp from './display/SocialIconsDisp.jsx'
import SortDisp from './display/SortDisp.jsx'
import SortPaginationDisp from './display/SortPaginationDisp.jsx'
import StatCarouselDisp from './display/StatCarouselDisp.jsx'
import StatsDisp from './display/StatsDisp.jsx'
import SubheaderDisp from './display/SubheaderDisp.jsx'
import TabMainDisp from './display/TabMainDisp.jsx'
import TabSupplementalDisp from './display/TabSupplementalDisp.jsx'
import TabMetricsDisp from './display/TabMetricsDisp.jsx'
import TabAuthorDisp from './display/TabAuthorDisp.jsx'
import TabCommentsDisp from './display/TabCommentsDisp.jsx'
import TabsDisp from './display/TabsDisp.jsx'
import TeaserDisp from './display/TeaserDisp.jsx'
import TextlinkDisp from './display/TextlinkDisp.jsx'
import TextListDisp from './display/TextListDisp.jsx'
import TestMessageDisp from './display/TestMessageDisp.jsx'
import ToggleContentDisp from './display/ToggleContentDisp.jsx'
import ToggleListDisp from './display/ToggleListDisp.jsx'
import ToggleSectionDisp from './display/ToggleSectionDisp.jsx'
import UnitCarouselDisp from './display/UnitCarouselDisp.jsx'
import UnitListDisp from './display/UnitListDisp.jsx'
import UnitSeriesDisp from './display/UnitSeriesDisp.jsx'
import UnitSimpleLayout from './layouts/UnitSimpleLayout.jsx'
import ViewExternalDisp from './display/ViewExternalDisp.jsx'
import WellDisp from './display/WellDisp.jsx'
import WithdrawModalDisp from './display/WithdrawModalDisp.jsx'
import WizardDisp from './display/WizardDisp.jsx'

// ***** UI Library Home Page ***** //

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui-library__header">
          <div className="ui-library__title">
            <Link to="/">eScholarship UI Library</Link>
          </div>
          <div className="ui-library__component">
            {window.location.href.replace(/.*#\//, '')}
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutLayout} />
          <Route path="/alert" component={AlertDisp} />
          <Route path="/authorlist" component={AuthorListDisp} />
          <Route path="/breadcrumb" component={BreadcrumbDisp} />
          <Route path="/browsecampuses" component={BrowseCampusesLayout} />
          <Route path="/browsedepartments" component={BrowseDepartmentsLayout} />
          <Route path="/browsejournals" component={BrowseJournalsLayout} />
          <Route path="/campus" component={CampusLayout} />
          <Route path="/campuscarouselframe" component={CampusCarouselFrameDisp} />
          <Route path="/campushero" component={CampusHeroDisp} />
          <Route path="/campussearch" component={CampusSearchDisp} />
          <Route path="/button" component={ButtonDisp} />
          <Route path="/checkbox" component={CheckboxDisp} />
          <Route path="/columnbox" component={ColumnBoxDisp} />
          <Route path="/columns" component={ColumnsDisp} />
          <Route path="/customselector" component={CustomSelectorDisp} />
          <Route path="/datatable" component={DataTableDisp} />
          <Route path="/daterange" component={DateRangeDisp} />
          <Route path="/descriptionlist" component={DescriptionListDisp} />
          <Route path="/dividecontent" component={DivideContentDisp} />
          <Route path="/download" component={DownloadDisp} />
          <Route path="/error404" component={Error404Layout} />
          <Route path="/export" component={ExportDisp} />
          <Route path="/input" component={InputDisp} />
          <Route path="/facetbox" component={FacetBoxDisp} />
          <Route path="/filter" component={FilterDisp} />
          <Route path="/footer" component={FooterDisp} />
          <Route path="/header1" component={Header1Disp} />
          <Route path="/header2" component={Header2Disp} />
          <Route path="/heading" component={HeadingDisp} />
          <Route path="/home" component={HomeLayout} />
          <Route path="/homehero" component={HeroDisp} />
          <Route path="/homesections" component={HomeSectionsDisp} />
          <Route path="/infopages" component={InfoPagesDisp} />
          <Route path="/issue" component={IssueDisp} />
          <Route path="/itemactions" component={ItemActionsDisp} />
          <Route path="/itemunavailable" component={ItemUnavailableDisp} />
          <Route path="/journal" component={JournalDisp} />
          <Route path="/journalcarousel" component={JournalCarouselDisp} />
          <Route path="/journalgrid" component={JournalGridDisp} />
          <Route path="/journalsimple" component={JournalSimpleLayout} />
          <Route path="/journalsplashy" component={JournalSplashyLayout} />
          <Route path="/journalinfo" component={JournalInfoDisp} />
          <Route path="/journalitemhtml" component={JournalItemHtmlLayout} />
          <Route path="/journalitemmultimedia" component={JournalItemMultimediaLayout} />
          <Route path="/journalitempdf" component={JournalItemPdfLayout} />
          <Route path="/jump" component={JumpDisp} />
          <Route path="/language" component={LanguageDisp} />
          <Route path="/lazyimage" component={LazyImageDisp} />
          <Route path="/marquee" component={MarqueeDisp} />
          <Route path="/mediafeature" component={MediaFeatureDisp} />
          <Route path="/mediafile" component={MediaFileDisp} />
          <Route path="/mediafilegrid" component={MediaFileGridDisp} />
          <Route path="/medialist" component={MediaListDisp} />
          <Route path="/mediaviewer" component={MediaViewerDisp} />
          <Route path="/modal" component={ModalDisp} />
          <Route path="/nav" component={NavDisp} />
          <Route path="/navbar" component={NavBarDisp} />
          <Route path="/pagination" component={PaginationDisp} />
          <Route path="/pdfview" component={PdfViewDisp} />
          <Route path="/pub" component={PubDisp} />
          <Route path="/pubdata" component={PubDataDisp} />
          <Route path="/pubinfo" component={PubInfoDisp} />
          <Route path="/publocation" component={PubLocationDisp} />
          <Route path="/pubpreview" component={PubPreviewDisp} />
          <Route path="/pubyear" component={PubYearDisp} />
          <Route path="/refine" component={RefineDisp} />
          <Route path="/relateditems" component={RelatedItemsDisp} />
          <Route path="/scholworks" component={ScholWorksDisp} />
          <Route path="/search1" component={Search1Disp} />
          <Route path="/search2" component={Search2Disp} />
          <Route path="/searchlayout" component={SearchLayout} />
          <Route path="/seriesitemembargoed" component={SeriesItemEmbargoedLayout} />
          <Route path="/seriesitemurl" component={SeriesItemUrlLayout} />
          <Route path="/seriesitemwithdrawn" component={SeriesItemWithdrawnLayout} />
          <Route path="/servererror" component={ServerErrorDisp} />
          <Route path="/skipnav" component={SkipNavDisp} />
          <Route path="/share" component={ShareDisp} />
          <Route path="/socialfeed" component={SocialFeedDisp} />
          <Route path="/socialicons" component={SocialIconsDisp} />
          <Route path="/sort" component={SortDisp} />
          <Route path="/sortpagination" component={SortPaginationDisp} />
          <Route path="/statcarousel" component={StatCarouselDisp} />
          <Route path="/stats" component={StatsDisp} />
          <Route path="/subheader" component={SubheaderDisp} />
          <Route path="/tabmain" component={TabMainDisp} />
          <Route path="/tabsupplemental" component={TabSupplementalDisp} />
          <Route path="/tabmetrics" component={TabMetricsDisp} />
          <Route path="/tabauthor" component={TabAuthorDisp} />
          <Route path="/tabcomments" component={TabCommentsDisp} />
          <Route path="/tabs" component={TabsDisp} />
          <Route path="/teaser" component={TeaserDisp} />
          <Route path="/testmessage" component={TestMessageDisp} />
          <Route path="/textlist" component={TextListDisp} />
          <Route path="/textlink" component={TextlinkDisp} />
          <Route path="/togglecontent" component={ToggleContentDisp} />
          <Route path="/togglelist" component={ToggleListDisp} />
          <Route path="/togglesection" component={ToggleSectionDisp} />
          <Route path="/unitcarousel" component={UnitCarouselDisp} />
          <Route path="/unitlist" component={UnitListDisp} />
          <Route path="/unitpub" component={UnitSeriesDisp} />
          <Route path="/unitsimple" component={UnitSimpleLayout} />
          <Route path="/viewexternal" component={ViewExternalDisp} />
          <Route path="/well" component={WellDisp} />
          <Route path="/withdrawmodal" component={WithdrawModalDisp} />
          <Route path="/wizard" component={WizardDisp} />
        </Switch>
      </div>
    )
  }
}

// ***** React Router ***** //

ReactDOM.render((
  <HashRouter>
    <App/>
  </HashRouter>
), document.getElementById('main'))
