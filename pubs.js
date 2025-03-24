// Modify the `PUBLICATIONS` object

const PUBLICATIONS = [
    {
    title:
      "VTDexManip: A Dataset and Benchmark for Visual-tactile Pretraining and Dexterous Manipulation With Reinforcement Learning",
    authors:
      "Qingtao Liu, Yu Cui, Zhengnan Sun, Gaofeng Li, Jiming Chen, Qi Ye",
    image: "",
    conference: "ICLR 2025",
    links: {
      "project page": "https://lqts.github.io/VTDexManip/",
      arxiv: "",
      paper: "",
      supp: "",
      video: "https://www.bilibili.com/video/BV15AfnYBEB1/?spm_id_from=333.1387.homepage.video_card.click",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "Masked Visual-Tactile Pre-training for Robot Manipulation",
    authors:
      "Qingtao Liu,  Qi Ye, Zhengnan Sun, Yu Cui, Gaofeng Li, Jiming Chen",
    image: "./M2VTP/resources/icra24.png",
    conference: "ICRA 2024",
    links: {
      "project page": "https://lqts.github.io/M2VTP/",
      ResearchGate: "https://www.researchgate.net/publication/378067504_Masked_Visual-Tactile_Pre-training_for_Robot_Manipulation",
      paper: "https://ieeexplore.ieee.org/abstract/document/10610933",
      supp: "",
      video: "https://www.bilibili.com/video/BV1pqkyYyEnp/?spm_id_from=333.1387.homepage.video_card.click",
      code: "https://github.com/LQTS/M2VTP",
    },
    badges: [],
  },
  {
    title:
      "InterRep: A Visual Interaction Representation for Robotic Grasping",
    authors:
      "Yu Cui, Qi Ye, Qingtao Liu, Anjun Chen, Gaofeng Li, Jiming Chen",
    image: "./images/paper/interRep.png",
    conference: "ICRA 2024",
    links: {
      "project page": "",
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/document/10610870",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "TPGP: Temporal-Parametric Optimization with Deep Grasp Prior for Dexterous Motion Planning",
    authors:
      "Haoming Li, Qi Ye, Yuchi Huo, Qingtao Liu, Shijian Jiang, Tao Zhou Xiang Li, Yang Zhou, Jiming Chen",
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
        "Diff-LfD: Contact-aware Model-based Learning from Visual Demonstration for Robotic Manipulation via Differentiable Physics-based Simulation and Rendering",
    authors:
      "Xinghao Zhu, Jinghan Ke, Zhixuan Xu, Zhixin Sun, Bizhe Bai, Jun Lv, Qingtao Liu, Yuwei Zeng, Qi Ye, Cewu Lu, Masayoshi Tomizuka, Lin Shao",
    image: "./images/paper/Diff-LfD.png",
    conference: "CoRL 2023",
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
  {
    title:
      "DexRepNet: Learning Dexterous Robotic Grasping Network with Geometric and Spatial Hand-Object Representation",
    authors:
      "Qingtao Liu, Yu Cui, Qi Ye, Zhengnan Sun, Haoming Li, Gaofeng Li, Lin Shao, Jiming Chen",
    image: "./DexRepNet/resources/examples.png",
    conference: "IROS 2023",
    links: {
      "project page": "https://lqts.github.io/DexRepNet/",
      arxiv: "https://arxiv.org/abs/2303.09806",
      paper: "https://arxiv.org/pdf/2303.09806",
      supp: "",
      video: "https://www.bilibili.com/video/BV1bP411b7jh/?spm_id_from=333.999.0.0",
      code: "https://github.com/LQTS/DexRep_Isaac",
    },
    badges: [],
  },

];

const HIGHLIGHT_NAME = "qingtao liu";

// Do not touch the code below

// Convert PUBLICATIONS to HTML table
document.addEventListener("DOMContentLoaded", (ev) => {
  const tbody = document.createElement("tbody");
  const rows = PUBLICATIONS.map((data) => {
    const row = document.createElement("tr");
    row.append(createImageCell(data.image), createContentCell(data));
    return row;
  });
  tbody.append(...rows);
  document.querySelector("#pub-list").append(tbody);
});

// Functions to create HTML elements
function createImageCell(link) {
  const cell = document.createElement("td");
  cell.style.padding = "10px";
  cell.style.width = "30%";
  cell.style.verticalAlign = "middle";
  const img = document.createElement("img");
  img.src = link;
  img.style.width = "100%";
  cell.append(img);
  return cell;
}

function createContentCell({ title, authors, conference, links, badges }) {
  const cell = document.createElement("td");
  cell.style.padding = "20px";
  cell.style.width = "70%";
  cell.style.verticalAlign = "middle";
  const titleElem = document.createElement("papertitle");
  titleElem.textContent = title;
  const authorsElem = createAuthorElement(authors);
  const conferenceElem = document.createElement("em");
  conferenceElem.textContent = conference;
  const badgesElem = createBadgesElement(badges);
  const linksElem = createLinksElement(links);
  const elements = [
    titleElem,
    document.createElement("br"),
    authorsElem,
    document.createElement("br"),
    conferenceElem,
    badgesElem,
    document.createElement("br"),
    linksElem,
  ].filter((elem) => elem);
  cell.append(...elements);
  return cell;
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
  for (let i = 0; i < elements.length; i++) {
    frag.append(elements[i]);
    if (i !== elements.length - 1) {
      frag.append(", ");
    }
  }
  return frag;
}

function createBadgesElement(badges) {
  if (!badges) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const textElem = document.createElement("span");
  textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
  frag.append(textElem);
  frag.append(
    ...badges.map((badge) => {
      const badgeElem = document.createElement("span");
      badgeElem.classList.add("badge");
      badgeElem.textContent = badge;
      return badgeElem;
    })
  );
  return frag;
}

function createLinksElement(links) {
  if (!links) {
    return null;
  }
  const frag = document.createDocumentFragment();
  for (const [name, link] of Object.entries(links)) {
    if (!link) {
      continue;
    }
    const elem = document.createElement("a");
    elem.href = link;
    elem.textContent = "[" + name + "]";
    const textElem = document.createElement("span");
    textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    frag.append(elem, textElem);
  }
  return frag;
}
