// Start:: Importing Middleware
import auth from "../middleware/auth.js";
import Authentication from "../pages/Authentication.vue";
// End:: Importing Middleware

// Start:: Importing Router Components
import Vue from "vue";
import VueRouter from "vue-router";
// End:: Importing Router Components

// ============== Start:: Home Page Route
import AppContentWrapper from "../pages/AppContentWrapper.vue";
import HomePage from "../pages/HomePage.vue";
// ============== End:: Home Page Route

// ============== Start:: Roles Routes
import RolesHome from "../views/Cruds/Roles/Home.vue";
import AllRoles from "../views/Cruds/Roles/ShowAll.vue";
import EditRole from "../views/Cruds/Roles/Edit.vue";
import CreateRole from "../views/Cruds/Roles/Create.vue";
// ============== End:: Roles Routes
// ============== Start:: FinancialReports Routes
import FinancialReportsHome from "../views/Cruds/FinancialReports/Home.vue";
import AllFinancialReports from "../views/Cruds/FinancialReports/ShowAll.vue";
// ============== End:: FinancialReports Routes

// ============== Start:: Admins Routes
import ShowAdmin from "../views/Cruds/Admins/Show.vue";
import EditAdmin from "../views/Cruds/Admins/Edit.vue";
import CreateAdmin from "../views/Cruds/Admins/Create.vue";
import AllAdmins from "../views/Cruds/Admins/ShowAll.vue";
import AdminsHome from "../views/Cruds/Admins/Home.vue";
// ============== End:: Admins Routes

// ============== Start:: login Routes
import LoginForm from "../views/Auth/LoginForm.vue";
import ResetPasswordEmailForm from "../views/Auth/ResetPasswordEmailForm.vue";
import EmailVerificationForm from "../views/Auth/EmailVerificationForm.vue";
import ChangePhoneNumberForm from "../views/Auth/ChangePhoneNumber.vue";
import ResetPasswordForm from "../views/Auth/ResetPasswordForm.vue";
// ============== End:: login Routes

// ============== Start:: Contact Messages Routes
import ContactMessagesHome from "../views/Cruds/ContactMessages/Home.vue";
import AllContactMessages from "../views/Cruds/ContactMessages/ShowAll.vue";
import showMessage from "../views/Cruds/ContactMessages/Show.vue";
// ============== End:: Contact Messages Routes

// ============== Start:: App Content Routes
import AppContentHome from "../views/Cruds/AppContent/Home.vue";
import GeneralSettings from "../views/Cruds/AppSettings/GeneralSettings.vue";
import AppSettings from "../views/Cruds/AppSettings/AppSettings.vue";
import AboutUs from "../views/Cruds/AppContent/AboutUs.vue";
import Terms from "../views/Cruds/AppContent/Terms.vue";
import DeleteAccount from "../views/Cruds/AppContent/DeleteAccount.vue";
import PrivacyPolicy from "../views/Cruds/AppContent/PrivacyPolicy.vue";
import BookingTerms from "../views/Cruds/AppContent/BookingTerms.vue";
// ============== End:: App Content Routes

// Start:: Questiions Router Components
import questionsHome from "../views/Cruds/FAQ/Home.vue";
import Allquestions from "../views/Cruds/FAQ/ShowAll.vue";
import Createquestions from "../views/Cruds/FAQ/Create.vue";
import Editquestions from "../views/Cruds/FAQ/Edit.vue";
// End:: Questions Router Components

// ============ Start:: Users Routes
import UsersHome from "../views/Cruds/Users/Home.vue";
import AllUsers from "../views/Cruds/Users/ShowAll.vue";
import ShowUsers from "../views/Cruds/Users/Show.vue";
// ============ End:: Users Routes

// ============ Start:: Chats Routes
import ChatsHome from "../views/Cruds/Chats/Home.vue";
import AllChats from "../views/Cruds/Chats/ShowAll.vue";
import ShowChats from "../views/Cruds/Chats/Show.vue";
// ============ End:: Chats Routes

// ============== Start:: Reasons Routes
import ReasonsHome from "../views/Cruds/Reasons/Home.vue";
import AllReasons from "../views/Cruds/Reasons/ShowAll.vue";
import CreateReasons from "../views/Cruds/Reasons/Create.vue";
import ShowReasons from "../views/Cruds/Reasons/Show.vue";
import EditReasons from "../views/Cruds/Reasons/Edit.vue";
// ============== End:: Reasons Routes

// ============== Start:: Words Routes
import WordsHome from "../views/Cruds/Words/Home.vue";
import AllWords from "../views/Cruds/Words/ShowAll.vue";
import CreateWords from "../views/Cruds/Words/Create.vue";
import ShowWords from "../views/Cruds/Words/Show.vue";
import EditWords from "../views/Cruds/Words/Edit.vue";
// ============== End:: Words Routes

// ============== Start:: Personal traits Routes
import PersonaltraitsHome from "../views/Cruds/Personal_traits/Home.vue";
import AllPersonaltraits from "../views/Cruds/Personal_traits/ShowAll.vue";
import CreatePersonaltraits from "../views/Cruds/Personal_traits/Create.vue";
import ShowPersonaltraits from "../views/Cruds/Personal_traits/Show.vue";
import EditPersonaltraits from "../views/Cruds/Personal_traits/Edit.vue";
// ============== End:: Personal traits Routes

// ============== Start:: Hobbies Routes
import HobbiesHome from "../views/Cruds/Hobbies/Home.vue";
import AllHobbies from "../views/Cruds/Hobbies/ShowAll.vue";
import CreateHobbies from "../views/Cruds/Hobbies/Create.vue";
import ShowHobbies from "../views/Cruds/Hobbies/Show.vue";
import EditHobbies from "../views/Cruds/Hobbies/Edit.vue";
// ============== End:: Hobbies Routes

// ============== Start:: Countries Routes
import CountriesHome from "../views/Cruds/Countries/Home.vue";
import AllCountries from "../views/Cruds/Countries/ShowAll.vue";
import CreateCountries from "../views/Cruds/Countries/Create.vue";
import ShowCountries from "../views/Cruds/Countries/Show.vue";
import EditCountries from "../views/Cruds/Countries/Edit.vue";
// ============== End:: Countries Routes

// ============== Start:: Cities Routes
import CitiesHome from "../views/Cruds/Cities/Home.vue";
import AllCities from "../views/Cruds/Cities/ShowAll.vue";
import CreateCities from "../views/Cruds/Cities/Create.vue";
import ShowCities from "../views/Cruds/Cities/Show.vue";
import EditCities from "../views/Cruds/Cities/Edit.vue";
// ============== End:: Cities Routes

// ============== Start:: Nationalities Routes
import NationalitiesHome from "../views/Cruds/Nationalities/Home.vue";
import AllNationalities from "../views/Cruds/Nationalities/ShowAll.vue";
import CreateNationalities from "../views/Cruds/Nationalities/Create.vue";
import ShowNationalities from "../views/Cruds/Nationalities/Show.vue";
import EditNationalities from "../views/Cruds/Nationalities/Edit.vue";
// ============== End:: Nationalities Routes

// ============== Start:: Religious sects Routes
import ReligioussectsHome from "../views/Cruds/Religious_sects/Home.vue";
import AllReligioussects from "../views/Cruds/Religious_sects/ShowAll.vue";
import CreateReligioussects from "../views/Cruds/Religious_sects/Create.vue";
import ShowReligioussects from "../views/Cruds/Religious_sects/Show.vue";
import EditReligioussects from "../views/Cruds/Religious_sects/Edit.vue";
// ============== End:: Religious sects Routes

// ============== Start:: Spoken languages Routes
import SpokenlanguagesHome from "../views/Cruds/Spoken_languages/Home.vue";
import AllSpokenlanguages from "../views/Cruds/Spoken_languages/ShowAll.vue";
import CreateSpokenlanguages from "../views/Cruds/Spoken_languages/Create.vue";
import ShowSpokenlanguages from "../views/Cruds/Spoken_languages/Show.vue";
import EditSpokenlanguages from "../views/Cruds/Spoken_languages/Edit.vue";
// ============== End:: Spoken languages Routes

// ============== Start:: Professions Routes
import ProfessionsHome from "../views/Cruds/Professions/Home.vue";
import AllProfessions from "../views/Cruds/Professions/ShowAll.vue";
import CreateProfessions from "../views/Cruds/Professions/Create.vue";
import ShowProfessions from "../views/Cruds/Professions/Show.vue";
import EditProfessions from "../views/Cruds/Professions/Edit.vue";
// ============== End:: Professions Routes

// ============== Start:: Education levels Routes
import EducationlevelsHome from "../views/Cruds/Education_levels/Home.vue";
import AllEducationlevels from "../views/Cruds/Education_levels/ShowAll.vue";
import CreateEducationlevels from "../views/Cruds/Education_levels/Create.vue";
import ShowEducationlevels from "../views/Cruds/Education_levels/Show.vue";
import EditEducationlevels from "../views/Cruds/Education_levels/Edit.vue";
// ============== End:: Education levels Routes

// ============== Start:: All Notifications Routes
import AllNotifications from "../views/Cruds/Notifications/ShowAll.vue";
import NotificationsHome from "../views/Cruds/Notifications/Home.vue";
import CreateNotifications from "../views/Cruds/Notifications/Create.vue";
import ShowNotificationsTable from "../views/Cruds/Notifications/Show.vue";
// import ShowNotificationsIcon from "../views/Cruds/Notifications/Test.vue";
import ShowAllNotifications from "../views/Cruds/Notifications/ShowAllNotifications.vue";

// ============== End:: All Notifications Routes

// ================== Start:: Clients Routes
import ClientsHome from "../views/Cruds/Clients/Home.vue";
import AllClients from "../views/Cruds/Clients/ShowAll.vue";
import ShowClients from "../views/Cruds/Clients/Show.vue";
// ================= End:: Clients Routes

// ================== Start:: Complaints Routes
import ComplaintsHome from "../views/Cruds/Complaints/Home.vue";
import AllComplaints from "../views/Cruds/Complaints/ShowAll.vue";
import ShowComplaints from "../views/Cruds/Complaints/Show.vue";
// ================= End:: Complaints Routes

// ============== Start:: Managements Routes
import ManagementsHome from "../views/Cruds/Managements/Home.vue";
import AllManagements from "../views/Cruds/Managements/ShowAll.vue";
import CreateManagements from "../views/Cruds/Managements/Create.vue";
import EditManagements from "../views/Cruds/Managements/Edit.vue";
import ShowManagements from "../views/Cruds/Managements/Show.vue";
// ============== End:: Managements Routes

// ============== Start:: Forbidden Route
import ForbiddenPage from "../pages/ForbiddenPage.vue";
// ============== End:: Forbidden Route

// ============== Start:: Not Found Route
import NotFoundPage from "../pages/NotFound.vue";
// ============== End:: Not Found Route

// End:: Importing Router Components

Vue.use(VueRouter);
const routes = [
  // ***************** Start:: Auth Routes Config
  {
    path: "/",
    component: Authentication,
    children: [
      {
        path: "/",
        component: LoginForm,
        name: "LoginForm",
      },
      {
        path: "/reset-password-email",
        name: "ResetPasswordEmailForm",
        component: ResetPasswordEmailForm,
      },
      {
        path: "/email-verification/:verification_type",
        name: "EmailVerificationForm",
        component: EmailVerificationForm,
      },
      {
        path: "/chang-phone-number",
        name: "ChangePhoneNumberForm",
        component: ChangePhoneNumberForm,
      },
      {
        path: "/reset-password",
        name: "ResetPasswordForm",
        component: ResetPasswordForm,
      },
    ],
  },
  // ***************** End:: Auth Routes Config

  // ***************** Start:: Content Routes Config
  {
    path: "/home",
    component: AppContentWrapper,
    children: [
      // Start:: Home Route Config
      {
        path: "/home",
        component: HomePage,
        meta: {
          middleware: [auth],
        },
      },
      // End:: Home Route Config

      // Start:: Contact Messages Routes Config
      {
        path: "/contact-messages",
        name: "ContactMessagesHome",
        component: ContactMessagesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllContactMessages",
            component: AllContactMessages,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "contacts index",
                subject: "contacts",
              },
            },
          },
          {
            path: "show/:id",
            name: "showMessage",
            component: showMessage,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "contacts show",
                subject: "contacts",
              },
            },
          },
        ],
      },
      // End:: Contact Messages Routes Config

      // Start:: App Content Routes Config
      {
        path: "/app-content",
        name: "AppContentHome",
        component: AppContentHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "about-us",
            name: "AboutUs",
            component: AboutUs,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "settings create",
                subject: "settings",
              },
            },
          },
          {
            path: "terms",
            name: "Terms",
            component: Terms,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "settings create",
                subject: "settings",
              },
            },
          },
          {
            path: "policy",
            name: "PrivacyPolicy",
            component: PrivacyPolicy,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "settings create",
                subject: "settings",
              },
            },
          },
          {
            path: "booking-terms",
            name: "BookingTerms",
            component: BookingTerms,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "settings create",
                subject: "settings",
              },
            },
          },
          {
            path: "delete-account",
            name: "DeleteAccount",
            component: DeleteAccount,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "settings create",
                subject: "settings",
              },
            },
          },
        ],
      },
      // End:: App Content Routes Config

      // Start:: AllFinancialReports Routes Config
      {
        path: "/financialreports",
        name: "FinancialReportsHome",
        component: FinancialReportsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllFinancialReports",
            component: AllFinancialReports,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "roles index",
                subject: "roles",
              },
            },
          },
        ],
      },
      // End:: AllFinancialReports Routes Config
      // Start:: Roles Routes Config
      {
        path: "/roles",
        name: "RolesHome",
        component: RolesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllRoles",
            component: AllRoles,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "roles index",
                subject: "roles",
              },
            },
          },
          {
            path: "create",
            name: "CreateRole",
            component: CreateRole,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "roles create",
                subject: "roles",
              },
            },
          },
          {
            path: "edit/:id",
            name: "EditRole",
            component: EditRole,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "roles edit",
                subject: "roles",
              },
            },
          },
        ],
      },
      // End:: Roles Routes Config

      // Start:: Admins Routes Config
      {
        path: "/admins",
        name: "AdminsHome",
        component: AdminsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllAdmins",
            component: AllAdmins,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "admins index",
                subject: "admins",
              },
            },
          },
          {
            path: "create",
            name: "CreateAdmin",
            component: CreateAdmin,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "admins create",
                subject: "admins",
              },
            },
          },
          {
            path: "edit/:id",
            name: "EditAdmin",
            component: EditAdmin,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "admins edit",
                subject: "admins",
              },
            },
          },
          {
            path: "show/:id",
            name: "ShowAdmin",
            component: ShowAdmin,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "admins show",
                subject: "admins",
              },
            },
          },
        ],
      },
      // End:: Admins Routes Config

      // Start:: users Routes Config
      {
        path: "/users",
        name: "UsersHome",
        component: UsersHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllUsers",
            component: AllUsers,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "users index",
                subject: "users",
              },
            },
          },
          {
            path: "show/:id",
            name: "ShowUsers",
            component: ShowUsers,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "users show",
                subject: "users",
              },
            },
          },
        ],
      },
      // End:: users Routes Config

      // Start:: chats Routes Config
      {
        path: "/chats",
        name: "ChatsHome",
        component: ChatsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllChats",
            component: AllChats,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "chats index",
                subject: "chats",
              },
            },
          },
          {
            path: "show/:id",
            name: "ShowChats",
            component: ShowChats,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "chats show",
                subject: "chats",
              },
            },
          },
        ],
      },
      // End:: chats Routes Config

      // Start:: reasons  Config
      {
        path: "/reasons",
        name: "reasons",
        component: ReasonsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allreasons",
            component: AllReasons,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banreasons index",
                subject: "banreasons",
              },
            },
          },
          {
            path: "create",
            name: "Createreasons",
            component: CreateReasons,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banreasons create",
                subject: "banreasons",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editreasons",
            component: EditReasons,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banreasons edit",
                subject: "banreasons",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showreasons",
            component: ShowReasons,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banreasons show",
                subject: "banreasons",
              },
            },
          },
        ],
      },
      // End:: reasons Config

      // Start:: words  Config
      {
        path: "/words",
        name: "words",
        component: WordsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allwords",
            component: AllWords,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banwords index",
                subject: "banwords",
              },
            },
          },
          {
            path: "create",
            name: "Createwords",
            component: CreateWords,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banwords create",
                subject: "banwords",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editwords",
            component: EditWords,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banwords edit",
                subject: "banwords",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showwords",
            component: ShowWords,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "banwords show",
                subject: "banwords",
              },
            },
          },
        ],
      },
      // End:: words Config

      // Start:: personaltraits  Config
      {
        path: "/personaltraits",
        name: "personaltraits",
        component: PersonaltraitsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allpersonaltraits",
            component: AllPersonaltraits,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "personaltraits index",
                subject: "personaltraits",
              },
            },
          },
          {
            path: "create",
            name: "Createpersonaltraits",
            component: CreatePersonaltraits,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "personaltraits create",
                subject: "personaltraits",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editpersonaltraits",
            component: EditPersonaltraits,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "personaltraits edit",
                subject: "personaltraits",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showpersonaltraits",
            component: ShowPersonaltraits,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "personaltraits show",
                subject: "personaltraits",
              },
            },
          },
        ],
      },
      // End:: personaltraits Config

      // Start:: hobbies  Config
      {
        path: "/hobbies",
        name: "hobbies",
        component: HobbiesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allhobbies",
            component: AllHobbies,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "hobbies index",
                subject: "hobbies",
              },
            },
          },
          {
            path: "create",
            name: "Createhobbies",
            component: CreateHobbies,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "hobbies create",
                subject: "hobbies",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Edithobbies",
            component: EditHobbies,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "hobbies edit",
                subject: "hobbies",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showhobbies",
            component: ShowHobbies,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "hobbies show",
                subject: "hobbies",
              },
            },
          },
        ],
      },
      // End:: hobbies Config

      // Start:: countries  Config
      {
        path: "/countries",
        name: "countries",
        component: CountriesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allcountries",
            component: AllCountries,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "countries index",
                subject: "countries",
              },
            },
          },
          {
            path: "create",
            name: "Createcountries",
            component: CreateCountries,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "countries create",
                subject: "countries",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editcountries",
            component: EditCountries,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "countries edit",
                subject: "countries",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showcountries",
            component: ShowCountries,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "countries show",
                subject: "countries",
              },
            },
          },
        ],
      },
      // End:: countries Config

      // Start:: cities  Config
      {
        path: "/cities",
        name: "cities",
        component: CitiesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allcities",
            component: AllCities,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "cities index",
                subject: "cities",
              },
            },
          },
          {
            path: "create",
            name: "Createcities",
            component: CreateCities,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "cities create",
                subject: "cities",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editcities",
            component: EditCities,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "cities edit",
                subject: "cities",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showcities",
            component: ShowCities,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "cities show",
                subject: "cities",
              },
            },
          },
        ],
      },
      // End:: cities Config

      // Start:: nationalities  Config
      {
        path: "/nationalities",
        name: "nationalities",
        component: NationalitiesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allnationalities",
            component: AllNationalities,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "nationalities index",
                subject: "nationalities",
              },
            },
          },
          {
            path: "create",
            name: "Createnationalities",
            component: CreateNationalities,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "nationalities create",
                subject: "nationalities",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editnationalities",
            component: EditNationalities,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "nationalities edit",
                subject: "nationalities",
              },
            },
          },
          {
            path: "show/:id",
            name: "Shownationalities",
            component: ShowNationalities,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "nationalities show",
                subject: "nationalities",
              },
            },
          },
        ],
      },
      // End:: nationalities Config

      // Start:: religioussects  Config
      {
        path: "/religioussects",
        name: "religioussects",
        component: ReligioussectsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allreligioussects",
            component: AllReligioussects,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "religioussects index",
                subject: "religioussects",
              },
            },
          },
          {
            path: "create",
            name: "Createreligioussects",
            component: CreateReligioussects,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "religioussects create",
                subject: "religioussects",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editreligioussects",
            component: EditReligioussects,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "religioussects edit",
                subject: "religioussects",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showreligioussects",
            component: ShowReligioussects,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "religioussects show",
                subject: "religioussects",
              },
            },
          },
        ],
      },
      // End:: religioussects Config

      // Start:: spokenlanguages  Config
      {
        path: "/spokenlanguages",
        name: "spokenlanguages",
        component: SpokenlanguagesHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allspokenlanguages",
            component: AllSpokenlanguages,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "spokenlanguages index",
                subject: "spokenlanguages",
              },
            },
          },
          {
            path: "create",
            name: "Createspokenlanguages",
            component: CreateSpokenlanguages,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "spokenlanguages create",
                subject: "spokenlanguages",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editspokenlanguages",
            component: EditSpokenlanguages,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "spokenlanguages edit",
                subject: "spokenlanguages",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showspokenlanguages",
            component: ShowSpokenlanguages,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "spokenlanguages show",
                subject: "spokenlanguages",
              },
            },
          },
        ],
      },
      // End:: spokenlanguages Config

      // Start:: professions  Config
      {
        path: "/professions",
        name: "professions",
        component: ProfessionsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allprofessions",
            component: AllProfessions,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "professions index",
                subject: "professions",
              },
            },
          },
          {
            path: "create",
            name: "Createprofessions",
            component: CreateProfessions,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "professions create",
                subject: "professions",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editprofessions",
            component: EditProfessions,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "professions edit",
                subject: "professions",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showprofessions",
            component: ShowProfessions,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "professions show",
                subject: "professions",
              },
            },
          },
        ],
      },
      // End:: professions Config

      // Start:: educationlevels  Config
      {
        path: "/educationlevels",
        name: "educationlevels",
        component: EducationlevelsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Alleducationlevels",
            component: AllEducationlevels,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "educationlevels index",
                subject: "educationlevels",
              },
            },
          },
          {
            path: "create",
            name: "Createeducationlevels",
            component: CreateEducationlevels,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "educationlevels create",
                subject: "educationlevels",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editeducationlevels",
            component: EditEducationlevels,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "educationlevels edit",
                subject: "educationlevels",
              },
            },
          },
          {
            path: "show/:id",
            name: "Showeducationlevels",
            component: ShowEducationlevels,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "educationlevels show",
                subject: "educationlevels",
              },
            },
          },
        ],
      },
      // End:: educationlevels Config

      // Start:: All Notifications Route Config
      {
        path: "/all-notifications",
        name: "NotificationsHome",
        component: NotificationsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllNotifications",
            component: AllNotifications,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "notifications index",
                subject: "notifications",
              },
            },
          },
          {
            path: "create",
            name: "CreateNotificationss",
            component: CreateNotifications,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "notifications create",
                subject: "notifications",
              },
            },
          },
          {
            path: "show",
            name: "ShowAllNotifications",
            component: ShowAllNotifications,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "notifications show",
                subject: "notifications",
              },
            },
          },
          {
            path: "show/:id",
            name: "ShowNotificationss",
            component: ShowNotificationsTable,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "notifications show",
                subject: "notifications",
              },
            },
          },
        ],
      },
      // End:: All Notifications Route Config

      // Start:: Clients Routes Config
      {
        path: "/Clients",
        name: "ClientsHome",
        component: ClientsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllClients",
            component: AllClients,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "clients index",
                subject: "clients",
              },
            },
          },
          {
            path: "show/:id",
            name: "ShowClients",
            component: ShowClients,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "clients show",
                subject: "clients",
              },
            },
          },
        ],
      },
      // End:: Clients Routes Config

      // Start:: Complaints Routes Config
      {
        path: "/Complaints",
        name: "ComplaintsHome",
        component: ComplaintsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllComplaints",
            component: AllComplaints,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "complaints index",
                subject: "complaints",
              },
            },
          },
          {
            path: "show/:id",
            name: "ShowComplaints",
            component: ShowComplaints,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "complaints show",
                subject: "complaints",
              },
            },
          },
        ],
      },
      // End:: Complaints Routes Config

      // Start:: questions Routes Config
      {
        path: "/questions",
        name: "questionsHome",
        component: questionsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "Allquestions",
            component: Allquestions,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "questions index",
                subject: "questions",
              },
            },
          },
          {
            path: "create",
            name: "Createquestions",
            component: Createquestions,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "questions create",
                subject: "questions",
              },
            },
          },
          {
            path: "edit/:id",
            name: "Editquestions",
            component: Editquestions,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "questions edit",
                subject: "questions",
              },
            },
          },
        ],
      },
      // End:: questions Routes Config

      // Start:: management Routes Config
      {
        path: "/managements",
        name: "ManagementsHome",
        component: ManagementsHome,
        meta: {
          middleware: [auth],
        },
        children: [
          {
            path: "all",
            name: "AllManagements",
            component: AllManagements,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "management index",
                subject: "management",
              },
            },
          },
          {
            path: "create",
            name: "CreateManagements",
            component: CreateManagements,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "management index",
                subject: "management",
              },
            },
          },
          {
            path: "edit/:id",
            name: "EditManagements",
            component: EditManagements,
            props: true,
            meta: {
              middleware: [auth],
            },
          },
          {
            path: "show/:id",
            name: "ShowManagements",
            component: ShowManagements,
            props: true,
            meta: {
              middleware: [auth],
              requiresPermission: {
                action: "management index",
                subject: "management",
              },
            },
          },
        ],
      },
      // End:: management Routes Config

      // Start:: App contact Routes Config
      {
        path: "/contact_settings",
        component: GeneralSettings,
        meta: {
          middleware: [auth],
          requiresPermission: {
            action: "settings create",
            subject: "settings",
          },
        },
      },
      {
        path: "/app_settings",
        component: AppSettings,
        meta: {
          middleware: [auth],
          requiresPermission: {
            action: "settings edit",
            subject: "settings",
          },
        },
      },
      // End:: App contact Routes Config
    ],
  },
  // ***************** End:: Content Routes Config

  // ***************** Start:: Forbidden Route Config
  {
    path: "/forbidden",
    name: "ForbiddenPage",
    component: ForbiddenPage,
  },
  // ***************** End:: Forbidden Route Config

  // ***************** Start:: Not Found Route Config
  {
    path: "/:notFound(.*)",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
  // ***************** End:: Not Found Route Config
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
  routes,
});

// Start:: Middleware And Router Guards
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

// Authentication and Permission Check Middleware
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem(
    "naseeb_admin_dashboard_user_token"
  );

  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  } else if (isAuthenticated) {
    const publicRoutes = [
      "LoginForm",
      "ResetPasswordEmailForm",
      "PhoneVerification",
      "ChangePhoneNumberForm",
      "ResetPasswordForm",
    ];

    if (publicRoutes.includes(to.name)) {
      return next("/home");
    }
  }

  if (to.meta.requiresPermission) {
    const { action, subject } = to.meta.requiresPermission;
    const storedPermissions = JSON.parse(
      localStorage.getItem("naseeb_admin_roles")
    )?.permissions;

    if (
      storedPermissions &&
      storedPermissions.some(
        (permission) =>
          permission.action === action && permission.subject === subject
      )
    ) {
      return next();
    } else {
      return next("/forbidden");
    }
  }

  return next();
});

export default router;
