const sidebars = {
  docs: [
    "introduction/introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "introduction/about",
        "introduction/setting-up",
        "introduction/core-concepts",
        "introduction/roadmap",
      ],
    },

    {
      type: "category",
      label: "Developer Resources",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "developers/technical-introduction",
        "developers/contributing",
        // "developers/test_system",
        {
          type: "category",
          label: "Talawa",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/talawa/talawa-introduction",
            "developers/talawa/talawa-lint",
            "developers/talawa/flutter-testing",
            {
              type: "category",
              label: "Offline First Features",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/talawa/offline-first-features/offline-user-actions",
                "developers/talawa/offline-first-features/action-handler-service",
                "developers/talawa/offline-first-features/feed-caching"
              ]
            }
          ],
        },
        {
          type: "category",
          label: "Talawa API",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/talawa-api/api-overview",
            "developers/talawa-api/api-design-guide",
            {
              type: "link",
              label: "Schema Documentation",
              href: "/docs/schema",
            },
            {
              type: "category",
              label: "Base Constraints",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/talawa-api/constraints/user",
                "developers/talawa-api/constraints/organization",
                "developers/talawa-api/constraints/admin",
              ],
            },
            "developers/talawa-api/mutations",
            "developers/talawa-api/schemas",
            "developers/talawa-api/authentication",
            "developers/talawa-api/functionality",
            "developers/talawa-api/pagination",
            "developers/talawa-api/expectations",
          ],
        },
        {
          type: "category",
          label: "Talawa Admin",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/talawa-admin/talawa-admin-introduction",
            {
              type: "category",
              label: "Plugins",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/talawa-admin/plugins/plugin-architecture",
                "developers/talawa-admin/plugins/implementing-plugins",
                "developers/talawa-admin/plugins/implementing-plugins-example",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Project 2024",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/project-2024/overview",
            {
              type: "category",
              label: "Chat Notification",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/chat-notification-system/chat_notification_system",
              ],
            },
            {
              type: "category",
              label: "Talawa Event Plugin",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/talawa-event-plugin/talawa_event_plugin",
              ],
            },
            {
              type: "category",
              label: "Tag Management",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/tag-management-system/tag_management_system",
              ],
            },
            {
              type: "category",
              label: "Volunteer Management",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/volunteer-management/volunteer-management",
              ],
            },
            {
              type: "category",
              label: "Improved File Uploads",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/improved-file-upload-and-security/improved-file-upload-and-security",
              ],
            },
            {
              type: "category",
              label: "Event Attendance",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/event-attendance/event-attendance",
              ],
            }
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Requirements Docs",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Existing Features",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "functionalities/core-functionalities",
            "functionalities/recurring-events",
          ],
        },
        {
          type: "category",
          label: "Desired Features",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "features/features-introduction",
            "features/admin-portal",
            "features/admin-role",
            "features/chat-and-messaging",
            "features/coordinator-role",
            "features/events",
            "features/members",
            "features/donations-and-fees",
            "features/news-feed",
            "features/notifications",
            "features/data-management",
            "features/organizations",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Git Guide",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "git-guide/quickstart",
        "git-guide/setup-git",
        "git-guide/get-talawa-code",
        "git-guide/pullrequest",
        "git-guide/collaborate",
        {
          type: "category",
          label: "Working copies",
          link: {
            type: "doc",
            id: "git-guide/Workingcopies/workingcopies",
          },
          collapsed: true,
          items: [
            "git-guide/Workingcopies/workflows",
            "git-guide/Workingcopies/usefulgitcommands",
          ],
        },

        {
          type: "category",
          label: "Using Git as you work",
          link: {
            type: "doc",
            id: "git-guide/gitworkflow",
          },
          collapsed: true,
          items: [
            "git-guide/Git working/Fork",
            "git-guide/Git working/Feature-branch",
            {
              type: "category",
              label: "Stage changes",
              link: {
                type: "doc",
                id: "git-guide/Git working/Stage changes/stage-changes",
              },
              collapsed: true,
              items: [
                "git-guide/Git working/Stage changes/status",
                "git-guide/Git working/Stage changes/stage-additions",
                "git-guide/Git working/Stage changes/stage-deletions",
              ],
            },
            "git-guide/Git working/commit-changes",
            "git-guide/Git working/push-commits",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "UI/UX Design",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "design/branding",
        "design/ux/ux-talawa",
        "design/ux/ux-design-system",
      ],
    },
    {
      type: "category",
      label: "Documentation Generation Guide",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "documentation_generation_guide/documentation_workflow",
        "documentation_generation_guide/admin_documentation_flow",
        "documentation_generation_guide/api_documentation_flow",
        "documentation_generation_guide/why_mdx_compatibility_script",
        "documentation_generation_guide/tsdoc_guide",
        "documentation_generation_guide/github_actions_tsdoc_validation",
      ],
    },
    {
      type: "category",
      label: "Internships",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "internships/internship-ideas",
        "internships/internship-application-template",
        "internships/internship-selection-criteria",
        "internships/conflicts-of-interest",
        {
          type: "category",
          label: "GSoC",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/gsoc/gsoc-introduction",
            "internships/gsoc/gsoc-ideas",
            "internships/gsoc/gsoc-application-process",
          ],
        },

        {
          type: "category",
          label: "GSoD",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/gsod/gsod-ideas",
            "internships/gsod/gsod-ideas-2022",
          ],
        },

        {
          type: "category",
          label: "Calico",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/calico/calico-introduction",
            "internships/calico/calico-ideas",
            "internships/calico/calico-application-process",
          ],
        },

        {
          type: "category",
          label: "Palisadoes",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: ["internships/palisadoes/palisadoes-introduction"],
        },
      ],
    },
    ,
  ],
  // API: [
  //   {
  //     type: "doc",
  //     id: "talawa-api-docs/modules",
  //     label: "Exports: Table of Content",
  //   },
  //   {
  //     type: "category",
  //     label: "Classes",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "talawa-api-docs/classes",
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Interfaces",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "talawa-api-docs/interfaces",
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Modules",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "talawa-api-docs/modules",
  //       },
  //     ],
  //   },
  // ],
  Talawa: [
    {
      type: "autogenerated",
      dirName: "talawa-mobile-docs",
    },
  ],
  // Admin: [
  //   {
  //     type: "doc",
  //     id: "talawa-admin-docs/modules",
  //     label: "Exports: Table of Content",
  //   },
  //   {
  //     type: "category",
  //     label: "Classes",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "talawa-admin-docs/classes",
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Interfaces",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "talawa-admin-docs/interfaces",
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Modules",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "talawa-admin-docs/modules",
  //       },
  //     ],
  //   },
  // ],
  ...require("./docs/schema/sidebar-schema.js"),
};

module.exports = sidebars;
