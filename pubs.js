// Update the PUBLICATIONS array with verified publication metadata.
// 2026 updates checked against Google Scholar, author project pages, arXiv, and publisher DOI records.
// Scholar lists DexRepNet (IROS 2023) twice; keep one entry here.

const PUBLICATIONS = [
  {
    title:
      "Visual-tactile pretraining and online multitask learning for humanlike manipulation dexterity",
    authors:
      "Qi Ye*, Qingtao Liu*, Siyun Wang, Jiaying Chen, Yu Cui, Ke Jin, Huajin Chen, Xuan Cai, Gaofeng Li, Jiming Chen",
    type: "journal",
    image: "./images/paper/VisualTactileDexterity.jpg",
    conference: "Science Robotics 2026",
    links: {
      paper: "https://doi.org/10.1126/scirobotics.ady2869",
      Focus: "https://doi.org/10.1126/scirobotics.aee5782",
    },
    badges: [],
  },
  {
    title:
      "DexRepNet++: Learning Dexterous Robotic Manipulation with Geometric and Spatial Hand-Object Representations",
    authors: "Qingtao Liu, Zhengnan Sun, Yu Cui, Haoming Li, Gaofeng Li, Lin Shao, Jiming Chen, Qi Ye",
    type: "journal",
    image: "./images/paper/Dexrepnet21.png",
    conference: "IEEE T-RO 2026",
    links: {
      "project page": "https://lqts.github.io/DexRepNet2/",
      arxiv: "https://arxiv.org/abs/2602.21811",
      paper: "https://doi.org/10.1109/TRO.2026.3651669",
      supp: "",
      video: "",
      code: "https://github.com/LQTS/DexRep_Isaac",
    },
    badges: [],
  },
  {
    title: "Collision-Free Humanoid Traversal in Cluttered Indoor Scenes",
    authors:
      "Han Xue*, Sikai Liang*, Zhikai Zhang*, Zicheng Zeng, Yun Liu, Yunrui Lian, Jilong Wang, Qingtao Liu, Xuesong Shi, Li Yi",
    type: "journal",
    // Figure 1: https://arxiv.org/html/2601.16035v2/fig/teaser2.png
    image: "./images/paper/HumanoidTraversal.png",
    conference: "IEEE RA-L 2026",
    links: {
      "project page": "https://axian12138.github.io/CAT/",
      arxiv: "https://arxiv.org/abs/2601.16035",
      paper: "https://doi.org/10.1109/LRA.2026.3703590",
      video: "https://www.youtube.com/watch?v=blek__Qf0Vc",
      code: "https://github.com/GalaxyGeneralRobotics/Click-and-Traverse",
    },
    badges: [],
  },
  {
    title: "Relational Dexterity: Transferring Human Dexterity via Relational Geometric Prior",
    authors:
      "Jiaying Chen, Bingheng Zhang, Qingtao Liu, Yiyang Ge, Wenzhe Ouyang, Anjun Chen, Qi Ye",
    type: "conference",
    image: "./images/paper/ReDex.png",
    conference: "IROS 2026",
    links: {
      "project page": "https://psycho811.github.io/ReDex/",
      paper: "https://psycho811.github.io/ReDex/redex.pdf",
    },
    badges: [],
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
      code: "https://github.com/LQTS/VTDexManip",
      pretraining: "https://github.com/LQTS/VTDexManipPretraining",
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
    authors: "Zhengnan Sun, Zhaotai Shi, Jiaying Chen, Qingtao Liu, Yu Cui, Jiming Chen, Qi Ye",
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
      "Guwen Han, Zhengnan Sun, Qingtao Liu, Yu Cui, Anjun Chen, Huajin Chen, Rong Xiong, Jiming Chen, Qi Ye",
    type: "conference",
    image: "./images/paper/TSRF.png",
    conference: "IROS 2025",
    links: {
      "project page": "",
      arxiv: "",
      paper: "https://doi.org/10.1109/IROS60139.2025.11247201",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
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
      "Qi Ye*, Haoming Li*, Qingtao Liu, Shijian Jiang, Tao Zhou, Yuchi Huo, Jiming Chen",
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
      "DexRepNet: Learning Dexterous Robotic Grasping Network with Geometric and Spatial Hand-Object Representations",
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
  {
    title: "Systematically Exploring the Capabilities of GPT-6 Astra as Embodied Policies",
    authors:
      "Galbot Team: Xuchuan Chen, Xiaoqian Cheng, Yu Deng, Lihe Ding, Shaocong Dong, Xiangjun Gao, Haozhe Jia, Zekai Li, Zhoujian Li, Yunrui Lian, Sikai Liang, Chenghuai Lin, Dairu Liu, Jiahang Liu, Qingtao Liu, Yuxuan Ma, Zekun Qi, Jiayi Su, He Wang, Ruochen Xu, Tianyu Xu, Xudong Xu, Zhe Xu, Mi Yan, Siming Yan, Li Yi, Ruixi Yu, Jinlu Zhang, Yintianrun Zhang, Zhikai Zhang, Zhizheng Zhang, Yixin Zheng, Weiyi Zhu",
    type: "preprint",
    image: "",
    conference: "arXiv 2026",
    links: {
      arxiv: "https://arxiv.org/abs/2609.38537",
      paper: "https://arxiv.org/pdf/2609.38537",
    },
    badges: ["Preprint"],
  },
];

const HIGHLIGHT_NAME = "qingtao liu";

// Convert PUBLICATIONS to cards
document.addEventListener("DOMContentLoaded", () => {
  const journalContainer = document.querySelector("#pub-list-journal");
  const confContainer = document.querySelector("#pub-list-conf");
  const preprintContainer = document.querySelector("#pub-list-preprint");
  if (!journalContainer || !confContainer || !preprintContainer) {
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

  const preprintFrag = document.createDocumentFragment();
  PUBLICATIONS.filter((p) => p.type === "preprint").forEach((data) =>
    preprintFrag.append(createPublicationRow(data))
  );
  preprintContainer.append(preprintFrag);
});

function createPublicationRow({ title, authors, conference, image, links, badges }) {
  const row = document.createElement("article");
  row.className = "pub-row";

  if (image) {
    const media = document.createElement("div");
    media.className = "pub-media";
    const img = document.createElement("img");
    img.src = image;
    img.alt = `${title} preview`;
    img.loading = "lazy";
    media.append(img);
    row.append(media);
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

  row.append(body);
  return row;
}

function createAuthorElement(authors) {
  if (!authors) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const elements = authors.split(/[,;]/g).map((author) => {
    const authorText = author.trim();
    const normalized = authorText.replace(/\*/g, "").toLowerCase();
    if (normalized === HIGHLIGHT_NAME) {
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
