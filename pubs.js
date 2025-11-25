// Modify the `PUBLICATIONS` object

const PUBLICATIONS = [
  {
    title:
      "DexRepNet++: Learning Dexterous Robotic Manipulation with Geometric and Spatial Hand-Object Representations",
    authors: "Qi Ye*, Qingtao Liu*, Zhengnan Sun, Yu Cui, Haoming Li, Gaofeng Li, Lin Shao, Jiming Chen",
    type: "journal",
    image: "./images/paper/Dexrepnet21.png",
    conference: "IEEE T-RO 2025",
    links: {
      "project page": "",
      arxiv: "",
      paper: "",
      supp: "",
      video: "",
      code: "",
    },
    badges: ["Accepted", "coming soon"],
  },
  {
    title:
      "VTDexManip: A Dataset and Benchmark for Visual-tactile Pretraining and Dexterous Manipulation With Reinforcement Learning",
    authors:
      "Qingtao Liu, Yu Cui, Zhengnan Sun, Gaofeng Li, Jiming Chen, Qi Ye",
    type: "conference",
    image: "./images/paper/VTDexManip.png",
    conference: "ICLR 2025",
    links: {
      "project page": "https://lqts.github.io/VTDexManip/",
      arxiv: "",
      paper: "https://openreview.net/pdf?id=jf7C7EGw21",
      poster: "./VTDexManip/resources/poster_ilcr25_vtdenmanip.pdf",
      video:
        "https://www.bilibili.com/video/BV15AfnYBEB1/?spm_id_from=333.1387.homepage.video_card.click",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "UpViTaL: Unpaired Visual-Tactile Self-Supervised Representation Learning for Dexterous Robotic Manipulation",
    authors: "Guwen Han, Qingtao Liu, Yu Cui, Anjun Chen, Jiming Chen, Qi Ye",
    type: "conference",
    image: "./images/paper/UpViTaL.png",
    conference: "ICRA 2025",
    links: {
      "project page": "",
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/document/11127230/",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "VTAO-BiManip: Masked Visual-Tactile-Action Pre-training with Object Understanding for Bimanual Dexterous Manipulation",
    authors: "Zhengnan Sun, Zhaotai Shi, Jiayin Chen, Qingtao Liu, Yu Cui, Qi Ye, Jiming Chen",
    type: "conference",
    image: "./images/paper/VTAO-BiManip.jpg",
    conference: "IROS 2025",
    links: {
      "project page": "https://suzend.github.io/VTAO-Bimanip/",
      arxiv: "https://arxiv.org/pdf/2501.03606",
      paper: "",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "Temporal-Spatial Representation Fusion for Dexterous Manipulation Learning with Unpaired Visual-Action Data",
    authors:
      "Guwen Han, Zhengnan Sun, Qingtao Liu, Yu Cui, Anjun Chen, Huajin Chen, Rong Xiong, Jiming Chen, and Qi Ye",
    type: "conference",
    image: "./images/paper/TSRF.png",
    conference: "IROS 2025",
    links: {
      "project page": "",
      arxiv: "",
      paper: "",
      supp: "",
      video: "",
      code: "",
    },
    badges: ["Accepted", "coming soon"],
  },
  {
    title:
      "Masked Visual-Tactile Pre-training for Robot Manipulation",
    authors:
      "Qingtao Liu, Qi Ye, Zhengnan Sun, Yu Cui, Gaofeng Li, Jiming Chen",
    type: "conference",
    image: "./M2VTP/resources/icra24.png",
    conference: "ICRA 2024",
    links: {
      "project page": "https://lqts.github.io/M2VTP/",
      ResearchGate:
        "https://www.researchgate.net/publication/378067504_Masked_Visual-Tactile_Pre-training_for_Robot_Manipulation",
      paper: "https://ieeexplore.ieee.org/abstract/document/10610933",
      supp: "",
      video:
        "https://www.bilibili.com/video/BV1pqkyYyEnp/?spm_id_from=333.1387.homepage.video_card.click",
      code: "https://github.com/LQTS/M2VTP",
    },
    badges: [],
  },
  {
    title: "InterRep: A Visual Interaction Representation for Robotic Grasping",
    authors:
      "Yu Cui, Qi Ye, Qingtao Liu, Anjun Chen, Gaofeng Li, Jiming Chen",
    type: "conference",
    image: "./images/paper/interRep.png",
    conference: "ICRA 2024",
    links: {
      "project page": "https://cuiyu0627.github.io/interrep.github.io/",
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/document/10610870",
      supp: "",
      video: "https://www.youtube.com/watch?v=P3JGWpPppK8",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "TPGP: Temporal-Parametric Optimization with Deep Grasp Prior for Dexterous Motion Planning",
    authors:
      "Haoming Li, Qi Ye, Yuchi Huo, Qingtao Liu, Shijian Jiang, Tao Zhou, Xiang Li, Yang Zhou, Jiming Chen",
    type: "conference",
    image: "./images/paper/TPGP.png",
    conference: "ICRA 2024",
    links: {
      "project page": "https://lihaoming45.github.io/tpgp.github.io/",
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/document/10610408",
      supp: "",
      video: "https://www.bilibili.com/video/BV1knk3Y7EN6/?spm_id_from=333.999.0.0",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "Contact2Motion: Contact guided dexterous grasp motion generation with synergy embedded optimization",
    authors:
      "Qi Ye*, Haoming Li*, Qingtao Liu, Shijian Jiang, Tao Zhou, Huochi Yu , Jiming Chen",
    type: "journal",
    image: "./images/paper/contact2motion.png",
    conference: "IJRR 2025",
    links: {
      "project page": "",
      arxiv: "",
      paper: "https://journals.sagepub.com/doi/10.1177/02783649251364392",
      dataset: "https://lihaoming45.github.io/GraspM3/index.html",
      video: "https://www.bilibili.com/video/BV1B8ftYAEXQ/?spm_id_from=333.1387.homepage.video_card.click",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "DexRepNet: Learning Dexterous Robotic Grasping Network with Geometric and Spatial Hand-Object Representation",
    authors:
      "Qingtao Liu*, Yu Cui*, Qi Ye, Zhengnan Sun, Haoming Li, Gaofeng Li, Lin Shao, Jiming Chen",
    type: "conference",
    image: "./DexRepNet/resources/examples.png",
    conference: "IROS 2023",
    links: {
      "project page": "https://lqts.github.io/DexRepNet/",
      arxiv: "https://arxiv.org/abs/2303.09806",
      paper: "https://arxiv.org/pdf/2303.09806",
      supp: "",
      video:
        "https://www.bilibili.com/video/BV1bP411b7jh/?spm_id_from=333.999.0.0",
      code: "https://github.com/LQTS/DexRep_Isaac",
    },
    badges: [],
  },
  {
    title:
      "Diff-LfD: Contact-aware Model-based Learning from Visual Demonstration for Robotic Manipulation via Differentiable Physics-based Simulation and Rendering",
    authors:
      "Xinghao Zhu, Jinghan Ke, Zhixuan Xu, Zhixin Sun, Bizhe Bai, Jun Lv, Qingtao Liu, Yuwei Zeng, Qi Ye, Cewu Lu, Masayoshi Tomizuka, Lin Shao",
    type: "conference",
    image: "./images/paper/Diff-LfD.png",
    conference: "CoRL 2023 (Oral)",
    links: {
      "project page": "https://sites.google.com/view/diff-lfd/",
      arxiv: "",
      paper: "https://proceedings.mlr.press/v229/zhu23a/zhu23a.pdf",
      supp: "https://drive.google.com/file/d/1s3IBZiUlNxrwUjlrX1Rk_gVh6TvMr9h6/view",
      video: "https://drive.google.com/file/d/1RjgUOSzOMVmDfQoyKZhAa9BXNwdzX2ti/view",
      code: "",
    },
    badges: ["Oral"],
  },
];

const HIGHLIGHT_NAME = "qingtao liu";

// Convert PUBLICATIONS to cards
document.addEventListener("DOMContentLoaded", () => {
  const journalContainer = document.querySelector("#pub-list-journal");
  const confContainer = document.querySelector("#pub-list-conf");
  if (!journalContainer || !confContainer) {
    return;
  }
  const fragment = document.createDocumentFragment();
  const journalPubs = PUBLICATIONS.filter((p) => p.type === "journal");
  const confPubs = PUBLICATIONS.filter((p) => p.type === "conference");
  journalPubs.forEach((data) => fragment.append(createPublicationRow(data)));
  journalContainer.append(fragment);

  const confFrag = document.createDocumentFragment();
  confPubs.forEach((data) => confFrag.append(createPublicationRow(data)));
  confContainer.append(confFrag);
});

function createPublicationRow({ title, authors, conference, image, links, badges }) {
  const row = document.createElement("article");
  row.className = "pub-row";

  const media = document.createElement("div");
  media.className = "pub-media";
  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = `${title} preview`;
    media.append(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "pub-placeholder";
    placeholder.textContent = "No preview";
    media.append(placeholder);
  }

  const body = document.createElement("div");
  body.className = "pub-body";

  const titleElem = document.createElement("h3");
  titleElem.className = "pub-title";
  titleElem.textContent = title;

  const authorsElem = document.createElement("p");
  authorsElem.className = "pub-authors";
  const authorContent = createAuthorElement(authors);
  if (authorContent) {
    authorsElem.append(authorContent);
  }

  const metaRow = document.createElement("div");
  metaRow.className = "pub-meta";
  const conferenceElem = document.createElement("div");
  conferenceElem.className = "pub-conference";
  conferenceElem.textContent = conference;
  metaRow.append(conferenceElem);

  const badgesElem = createBadgesElement(badges);
  if (badgesElem) {
    metaRow.append(badgesElem);
  }

  const linksElem = createLinksElement(links);

  body.append(titleElem, authorsElem, metaRow);
  if (linksElem) {
    body.append(linksElem);
  }

  row.append(media, body);
  return row;
}

function createAuthorElement(authors) {
  if (!authors) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const elements = authors.split(/[,;]/g).map((author) => {
    const authorText = author.trim();
    if (authorText.toLowerCase() === HIGHLIGHT_NAME) {
      const authorElem = document.createElement("strong");
      authorElem.textContent = authorText;
      return authorElem;
    }
    return authorText;
  });
  elements.forEach((elem, index) => {
    frag.append(elem);
    if (index !== elements.length - 1) {
      frag.append(", ");
    }
  });
  return frag;
}

function createBadgesElement(badges) {
  if (!badges || badges.length === 0) {
    return null;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "badge-row";
  badges.forEach((badge) => {
    const badgeElem = document.createElement("span");
    badgeElem.classList.add("badge");
    badgeElem.textContent = badge;
    wrapper.append(badgeElem);
  });
  return wrapper;
}

function createLinksElement(links) {
  if (!links) {
    return null;
  }
  const container = document.createElement("div");
  container.className = "pub-links";
  Object.entries(links).forEach(([name, link]) => {
    if (!link) {
      return;
    }
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.textContent = name;
    container.append(anchor);
  });
  return container.childNodes.length ? container : null;
}
