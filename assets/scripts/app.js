(function () {
  const data = window.PORTFOLIO_DATA;

  if (!data) {
    return;
  }

  const app = document.getElementById("app");

  const pathToUrl = function (path) {
    return encodeURI(path).replace(/#/g, "%23");
  };

  const joinTags = function (items, tone) {
    return items
      .map(function (item) {
        return '<span class="tag ' + tone + '">' + item + "</span>";
      })
      .join("");
  };

  const toTwoDigits = function (value) {
    return String(value + 1).padStart(2, "0");
  };

  const experienceHtml = data.experience
    .map(function (item, index) {
      return (
        '<article class="timeline-item card reveal">' +
        '<p class="timeline-count">EXP ' +
        toTwoDigits(index) +
        "</p>" +
        '<p class="timeline-period">' +
        item.period +
        "</p>" +
        '<h3 class="timeline-role">' +
        item.role +
        "</h3>" +
        '<p class="timeline-company">' +
        item.company +
        "</p>" +
        '<ul class="bullet-list">' +
        item.bullets
          .map(function (bullet) {
            return "<li>" + bullet + "</li>";
          })
          .join("") +
        "</ul>" +
        "</article>"
      );
    })
    .join("");

  const projectHtml = data.projects
    .map(function (project, index) {
      const mediaHtml = project.media
        .map(function (media) {
          return (
            '<a class="project-image-link" href="' +
            pathToUrl(media.src) +
            '" target="_blank" rel="noreferrer">' +
            '<img loading="lazy" src="' +
            pathToUrl(media.src) +
            '" alt="' +
            media.alt +
            '" />' +
            "</a>"
          );
        })
        .join("");

      const mediaSectionHtml = mediaHtml
        ? '<div class="project-media">' + mediaHtml + "</div>"
        : '<div class="project-media project-media-empty">' +
          '<div class="project-media-placeholder">' +
          "<p>No preview image</p>" +
          "<span>See repository and documentation for architecture and workflows.</span>" +
          "</div>" +
          "</div>";

      const projectMetaHtml =
        '<div class="project-meta">' +
        '<span class="project-meta-item"><strong>' +
        String(project.stack.length) +
        "</strong> Tech</span>" +
        '<span class="project-meta-item"><strong>' +
        String(project.highlights.length) +
        "</strong> Highlights</span>" +
        '<span class="project-meta-item"><strong>' +
        String(project.links.length) +
        "</strong> Links</span>" +
        "</div>";

      const projectLinks = project.links
        .map(function (link) {
          return (
            '<a class="text-link project-link" href="' +
            link.href +
            '" target="_blank" rel="noreferrer">' +
            link.label +
            "</a>"
          );
        })
        .join("");

      return (
        '<article class="project-card card reveal">' +
        '<div class="project-head">' +
        '<p class="project-seq">PROJECT ' +
        toTwoDigits(index) +
        "</p>" +
        '<p class="project-period-badge">' +
        project.period +
        "</p>" +
        "</div>" +
        '<h3 class="project-name">' +
        project.name +
        "</h3>" +
        '<p class="project-description">' +
        project.description +
        "</p>" +
        projectMetaHtml +
        '<div class="tag-list">' +
        joinTags(project.stack, "tag-secondary") +
        "</div>" +
        mediaSectionHtml +
        '<ul class="bullet-list">' +
        project.highlights
          .map(function (highlight) {
            return "<li>" + highlight + "</li>";
          })
          .join("") +
        "</ul>" +
        '<div class="project-links">' +
        projectLinks +
        "</div>" +
        "</article>"
      );
    })
    .join("");

  const educationHtml = data.education
    .map(function (item) {
      return (
        '<article class="education-item card reveal">' +
        '<p class="timeline-period">' +
        item.period +
        "</p>" +
        '<h3 class="timeline-role">' +
        item.school +
        "</h3>" +
        '<p class="timeline-company">' +
        item.major +
        "</p>" +
        '<p class="education-gpa">GPA: <strong>' +
        item.gpa +
        "</strong></p>" +
        "</article>"
      );
    })
    .join("");

  const achievementHtml = data.achievements
    .map(function (item) {
      return "<li>" + item + "</li>";
    })
    .join("");

  const avatarHtml = data.profile.avatarSrc
    ? '<a class="hero-avatar-link" href="' +
      pathToUrl(data.profile.avatarSrc) +
      '" target="_blank" rel="noreferrer">' +
      '<img class="hero-avatar" src="' +
      pathToUrl(data.profile.avatarSrc) +
      '" alt="' +
      (data.profile.avatarAlt || data.profile.fullName + " avatar") +
      '" />' +
      "</a>"
    : "";

  const avatarPanelHtml = avatarHtml
    ? '<aside class="hero-portrait card">' +
      '<p class="portrait-kicker">Profile Photo</p>' +
      avatarHtml +
      '<p class="portrait-name">' +
      data.profile.fullName +
      "</p>" +
      '<p class="portrait-role">' +
      data.profile.title +
      "</p>" +
      "</aside>"
    : "";

  const heroSideHtml = avatarPanelHtml
    ? '<div class="hero-side">' + avatarPanelHtml + "</div>"
    : "";

  const snapshotStatsHtml = data.quickStats
    .map(function (item) {
      return (
        '<li><span class="stat-label">' +
        item.label +
        '</span><strong class="stat-value">' +
        item.value +
        "</strong></li>"
      );
    })
    .join("");

  app.innerHTML =
    '<section id="hero" class="hero section reveal">' +
    '<div class="hero-copy">' +
    '<p class="eyebrow">Portfolio 2026</p>' +
    '<h1>' +
    data.profile.fullName +
    "</h1>" +
    '<p class="hero-title">' +
    data.profile.title +
    "</p>" +
    '<p class="hero-stackline">' +
    data.skills.core.join(" • ") +
    "</p>" +
    '<p class="hero-objective">' +
    data.profile.objective +
    "</p>" +
    '<div class="contact-chip-wrap">' +
    '<a class="contact-chip" href="' +
    data.profile.phoneHref +
    '">' +
    data.profile.phone +
    "</a>" +
    '<a class="contact-chip" href="' +
    data.profile.emailHref +
    '">' +
    data.profile.email +
    "</a>" +
    '<a class="contact-chip" href="' +
    data.profile.githubHref +
    '" target="_blank" rel="noreferrer">' +
    data.profile.githubLabel +
    "</a>" +
    "</div>" +
    '<p class="hero-location">' +
    data.profile.location +
    "</p>" +
    '<div class="hero-cta">' +
    '<a class="btn btn-primary" href="' +
    pathToUrl(data.profile.cvFile) +
    '" target="_blank" rel="noreferrer">Download CV</a>' +
    '<a class="btn btn-ghost" href="#projects">View Projects</a>' +
    "</div>" +
    "</div>" +
    heroSideHtml +
    "</section>" +
    '<section id="snapshot" class="section reveal">' +
    '<aside class="hero-panel quick-snapshot card">' +
    '<p class="panel-title">Quick Snapshot</p>' +
    '<p class="panel-subtitle">Software Developer Intern</p>' +
    '<ul class="stat-list">' +
    snapshotStatsHtml +
    "</ul>" +
    "</aside>" +
    "</section>" +
    '<section id="about" class="section reveal">' +
    '<div class="section-heading">' +
    '<p class="section-kicker">Foundation</p>' +
    "<h2>Profile & Skills</h2>" +
    "<p>Core technologies and supporting tools for full-stack development.</p>" +
    "</div>" +
    '<div class="about-grid">' +
    '<article class="card skill-card skill-core">' +
    "<h3>Core Stack</h3>" +
    '<div class="tag-list">' +
    joinTags(data.skills.core, "tag-primary") +
    "</div>" +
    "</article>" +
    '<article class="card skill-card skill-support">' +
    "<h3>Familiar With</h3>" +
    '<div class="tag-list">' +
    joinTags(data.skills.familiar, "tag-secondary") +
    "</div>" +
    "</article>" +
    "</div>" +
    "</section>" +
    '<section id="experience" class="section">' +
    '<div class="section-heading reveal">' +
    '<p class="section-kicker">Practice</p>' +
    "<h2>Work Experience</h2>" +
    "<p>Practical experience from teaching and university-level research projects.</p>" +
    "</div>" +
    '<div class="timeline">' +
    experienceHtml +
    "</div>" +
    "</section>" +
    '<section id="projects" class="section">' +
    '<div class="section-heading reveal">' +
    '<p class="section-kicker">Build</p>' +
    "<h2>Personal Projects</h2>" +
    "<p>Selected products with real implementation output and demo evidence.</p>" +
    "</div>" +
    '<div class="project-grid">' +
    projectHtml +
    "</div>" +
    "</section>" +
    '<section id="education" class="section">' +
    '<div class="section-heading reveal">' +
    '<p class="section-kicker">Track Record</p>' +
    "<h2>Education & Achievements</h2>" +
    "<p>Academic profile, competition outcomes, and publication milestones.</p>" +
    "</div>" +
    '<div class="edu-achievement-grid">' +
    '<div class="education-block">' +
    educationHtml +
    "</div>" +
    '<article class="card reveal">' +
    "<h3>Achievements</h3>" +
    '<ul class="bullet-list">' +
    achievementHtml +
    "</ul>" +
    "</article>" +
    "</div>" +
    "</section>" +
    '<section id="evidence" class="section">' +
    '<div class="section-heading reveal">' +
    '<p class="section-kicker">Proof</p>' +
    "<h2>Evidence Gallery</h2>" +
    "<p>Direct proof for projects, contests, teaching activity, and publication.</p>" +
    "</div>" +
    '<div id="evidenceFilters" class="filter-wrap reveal"></div>' +
    '<div id="evidenceGrid" class="evidence-grid"></div>' +
    "</section>" +
    '<section id="contact" class="section contact-section reveal">' +
    '<article class="card contact-card">' +
    "<h2>Let us build something useful</h2>" +
    "<p>I am actively looking for internship opportunities in software development and ready to contribute to product teams.</p>" +
    '<div class="contact-links">' +
    '<a class="btn btn-primary" href="' +
    data.profile.emailHref +
    '">Email me</a>' +
    '<a class="btn btn-ghost" href="' +
    data.profile.githubHref +
    '" target="_blank" rel="noreferrer">GitHub</a>' +
    "</div>" +
    "</article>" +
    "</section>" +
    '<footer class="site-footer">' +
    '<p>© <span id="currentYear"></span> ' +
    data.profile.fullName +
    ". Built for internship applications.</p>" +
    "</footer>";

  const flattenedEvidence = data.evidenceCategories.reduce(function (acc, category) {
    category.items.forEach(function (item) {
      acc.push({
        categoryId: category.id,
        categoryLabel: category.label,
        type: item.type,
        title: item.title,
        src: item.src,
        thumbnail: item.thumbnail || ""
      });
    });
    return acc;
  }, []);

  const filters = [{ id: "all", label: "All" }].concat(
    data.evidenceCategories.map(function (item) {
      return { id: item.id, label: item.label };
    })
  );

  const filterWrap = document.getElementById("evidenceFilters");
  const evidenceGrid = document.getElementById("evidenceGrid");

  filterWrap.innerHTML = filters
    .map(function (filter, index) {
      return (
        '<button class="filter-btn ' +
        (index === 0 ? "is-active" : "") +
        '" data-filter="' +
        filter.id +
        '">' +
        filter.label +
        "</button>"
      );
    })
    .join("");

  const drawEvidence = function (filter) {
    const visible =
      filter === "all"
        ? flattenedEvidence
        : flattenedEvidence.filter(function (item) {
            return item.categoryId === filter;
          });

    evidenceGrid.innerHTML = visible
      .map(function (item) {
        if (item.type === "pdf") {
          const previewHtml = item.thumbnail
            ? '<a class="evidence-image-link" href="' +
              pathToUrl(item.src) +
              '" target="_blank" rel="noreferrer">' +
              '<img loading="lazy" src="' +
              pathToUrl(item.thumbnail) +
              '" alt="' +
              item.title +
              ' preview" />' +
              "</a>"
            : '<div class="pdf-tile">PDF</div>';

          return (
            '<article class="evidence-card card reveal">' +
            previewHtml +
            '<p class="evidence-title">' +
            item.title +
            "</p>" +
            '<p class="evidence-meta">' +
            item.categoryLabel +
            "</p>" +
            '<a class="text-link" href="' +
            pathToUrl(item.src) +
            '" target="_blank" rel="noreferrer">Open file</a>' +
            "</article>"
          );
        }

        return (
          '<article class="evidence-card card reveal">' +
          '<a class="evidence-image-link" href="' +
          pathToUrl(item.src) +
          '" target="_blank" rel="noreferrer">' +
          '<img loading="lazy" src="' +
          pathToUrl(item.src) +
          '" alt="' +
          item.title +
          '" />' +
          "</a>" +
          '<p class="evidence-title">' +
          item.title +
          "</p>" +
          '<p class="evidence-meta">' +
          item.categoryLabel +
          "</p>" +
          "</article>"
        );
      })
      .join("");

    activateReveal();
  };

  filterWrap.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-filter]");

    if (!button) {
      return;
    }

    const selected = button.getAttribute("data-filter");

    filterWrap.querySelectorAll("button").forEach(function (btn) {
      btn.classList.remove("is-active");
    });

    button.classList.add("is-active");
    drawEvidence(selected);
  });

  const activateReveal = function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16
      }
    );

    revealElements.forEach(function (element) {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });
  };

  drawEvidence("all");
  activateReveal();

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", function () {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open");
  });

  mainNav.addEventListener("click", function (event) {
    if (event.target.matches("a")) {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("currentYear").textContent = String(new Date().getFullYear());
})();
