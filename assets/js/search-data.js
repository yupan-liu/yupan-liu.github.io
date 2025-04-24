// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-papers",
          title: "Papers",
          description: "Note that the authors of papers in theoretical computer science are listed alphabetically. For slides or videos, please refer to the &quot;Talks&quot; page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Slides attached here only reflect the speaker&#39;s thoughts at the moment of giving the talks and probably consist of errors. Therefore, please be careful when referring to statements from these slides.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-miscellaneous",
              title: "Miscellaneous",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/misc/";
              },
            },{id: "dropdown-blog-in-chinese",
              title: "Blog (in Chinese)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://climberpi.github.io";
              },
            },{id: "dropdown-resources",
              title: "Resources",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resources/";
              },
            },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
