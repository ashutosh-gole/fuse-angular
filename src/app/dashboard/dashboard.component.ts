import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  menuLists = [
    {
      type: "submenu",
      displayName: "Dashboard",
      subMenuList: [
        {
          displayName: "Analytics"
        },
        {
          displayName: "Project"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Calendar"
    },
    {
      type: "submenu",
      displayName: "E-Commerce",
      subMenuList: [
        {
          displayName: "Products"
        },
        {
          displayName: "Product Detail"
        },
        {
          displayName: "Orders"
        },
        {
          displayName: "Order Detail"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Academy"
    },
    {
      type: "menu",
      displayName: "Mail"
    },
    {
      type: "menu",
      displayName: "Mail Ngrx"
    },
    {
      type: "menu",
      displayName: "Chat"
    },
    {
      type: "menu",
      displayName: "File Manager"
    },
    {
      type: "menu",
      displayName: "To-Do"
    },
    {
      type: "menu",
      displayName: "Scrumboard"
    },
    {
      type: "submenu",
      displayName: "Authentication",
      subMenuList: [
        {
          displayName: "Login"
        },
        {
          displayName: "Login v2"
        },
        {
          displayName: "Register"
        },
        {
          displayName: "Register v2"
        },
        {
          displayName: "Forgot Password"
        },
        {
          displayName: "Forgot Password v2"
        },
        {
          displayName: "Reset Password"
        },
        {
          displayName: "Reset Password v2"
        },
        {
          displayName: "Lock Screen"
        },
        {
          displayName: "Mail Confirmation"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Coming Soon"
    },
    {
      type: "submenu",
      displayName: "Errors",
      subMenuList: [
        {
          displayName: "404"
        },
        {
          displayName: "500"
        }
      ]
    },
    {
      type: "submenu",
      displayName: "Invoice",
      subMenuList: [
        {
          displayName: "Modern"
        },
        {
          displayName: "Compact"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Maintenance"
    },
    {
      type: "submenu",
      displayName: "Pricing",
      subMenuList: [
        {
          displayName: "Style 1"
        },
        {
          displayName: "Style 2"
        },
        {
          displayName: "Style 3"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Profile"
    },
    {
      type: "submenu",
      displayName: "Search",
      subMenuList: [
        {
          displayName: "Classic"
        },
        {
          displayName: "Modern"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Faq"
    },
    {
      type: "menu",
      displayName: "Knowledge Base"
    },
    {
      type: "menu",
      displayName: "Cards"
    },
    {
      type: "menu",
      displayName: "Forms"
    },
    {
      type: "menu",
      displayName: "Icons"
    },
    {
      type: "menu",
      displayName: "Typography"
    },
    {
      type: "menu",
      displayName: "Helper Classes"
    },
    {
      type: "submenu",
      displayName: "Page Layouts",
      subMenuList: [
        {
          type: "submenu",
          displayName: "Carded",
          subMenuList: [
            {
              displayName: "Full Width #1"
            },
            {
              displayName: "Full Width #2"
            },
            {
              displayName: "Full Width Tabbed #1"
            },
            {
              displayName: "Full Width Tabbed #2"
            },
            {
              displayName: "Left Sidebar #1"
            },
            {
              displayName: "Left Sidebar #2"
            },
            {
              displayName: "Left Sidebar Tabbed #1"
            },
            {
              displayName: "Left Sidebar Tabbed #2"
            },
            {
              displayName: "Right Sidebar #1"
            },
            {
              displayName: "Right Sidebar #2"
            },
            {
              displayName: "Right Sidebar Tabbed #1"
            },
            {
              displayName: "Right Sidebar Tabbed #2"
            }
          ]
        },
        {
          type: "submenu",
          displayName: "Simple",
          subMenuList: [
            {
              displayName: "Full Width #1"
            },
            {
              displayName: "Full Width Tabbed #1"
            },
            {
              displayName: "Left Sidebar #1"
            },
            {
              displayName: "Left Sidebar #2"
            },
            {
              displayName: "Left Sidebar #3"
            },
            {
              displayName: "Left Sidebar #4"
            },
            {
              displayName: "Right Sidebar #1"
            },
            {
              displayName: "Right Sidebar #2"
            },
            {
              displayName: "Right Sidebar #3"
            },
            {
              displayName: "Right Sidebar #4"
            }
          ]
        },
        {
          type: "menu",
          displayName: "Blank"
        }
      ]
    },
    {
      type: "menu",
      displayName: "Colors"
    }
  ];
  // Array Close

}