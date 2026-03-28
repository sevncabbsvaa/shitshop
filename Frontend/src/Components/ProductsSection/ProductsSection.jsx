import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ProductsSection.scss";

import fallbackImage from "../../assets/yaxs╠º─▒_og╠ålan.png";
import prod2 from "../../assets/prod2.jpg";
import aura from "../../assets/aura.jpg";
import varli from "../../assets/varli.jpg";
import ozguven from "../../assets/ozguven.jpg";
import money from "../../assets/money.jpg";
import laugh from "../../assets/laugh.jpg";
import certificateTemplate from "../../assets/certificate-template.png";

const API_BASE = "http://localhost:5000";

const certificateProfiles = {
  confidence: {
    shortTitle: "Confidence",
    description: "özgüvən, aura və respekt səviyyəsini yüksəldib.",
    accent: ["#3b0dff", "#e100ff"],
  },
  wealth: {
    shortTitle: "Wealth",
    description: "bolluq, pul enerjisi və mindset upgrade əldə edib.",
    accent: ["#00c27a", "#0ba360"],
  },
  social: {
    shortTitle: "Social",
    description: "ünsiyyət, first impression və sosial təsir gücünü artırıb.",
    accent: ["#ff7a18", "#ff3d77"],
  },
  humor: {
    shortTitle: "Legend",
    description: "vibe, mizah və internet əjdahalığı statusu qazanıb.",
    accent: ["#00b7ff", "#7b2cff"],
  },
};

const imageMap = {
  "yaxsi-oglan": fallbackImage,
  prod2,
  aura,
  varli,
  ozguven,
  money,
  laugh,
};

const products = [
  {
    id: 1,
    badge: "TRENDING",
    imageKey: "yaxsi-oglan",
    name: "YAXŞI OĞLAN OL",
    desc: "Hər kruqda iki əlnən görüşəcəklər sənnən, sən otağa girəndə hamı qalxacağ ayağa",
    price: "3 AZN",
    oldPrice: "5 AZN",
  },
  {
    id: 2,
    badge: "NEW",
    imageKey: "prod2",
    name: "STİLİNİ QALDIR",
    desc: "Daha güclü görün, daha fərqli ol, girdiyin hər mühitdə diqqət çək.",
    price: "2 AZN",
    oldPrice: "4 AZN",
  },
  {
    id: 3,
    badge: "HOT",
    imageKey: "aura",
    name: "AURA YÜKSƏLT",
    desc: "Səni görən bir də baxsın, enerjinlə fərq yarat, daha premium hiss etdir.",
    price: "6 AZN",
    oldPrice: "13 AZN",
  },
  {
    id: 4,
    badge: "BEST",
    imageKey: "varli",
    name: "VARLI OĞLAN TAP",
    desc: "Pullu erkek axtaran xanımların diqqətinə, bu paketdən sonra qapında yatacaqlar!!!",
    price: "4 AZN",
    oldPrice: "5 AZN",
  },
  {
    id: 5,
    badge: "BEST",
    imageKey: "ozguven",
    name: "ÖZGÜVƏN PAKETİ",
    desc: "Dur, bax, danış — hər hərəkətində özünəinam hiss olunsun.",
    price: "3 AZN",
    oldPrice: "4 AZN",
  },
  {
    id: 6,
    badge: "BEST",
    imageKey: "money",
    name: "VARLI OL",
    desc: "Daşdan belə pul çıxardan adama dönüş!",
    price: "1 AZN",
    oldPrice: "1.99 AZN",
  },
  {
    id: 7,
    badge: "BEST",
    imageKey: "laugh",
    name: "MİZAH PRO",
    desc: "Özün deyib özün gülmə, bundan sonra hamını güldür.",
    price: "2.50 AZN",
    oldPrice: "5 AZN",
  },
  {
    id: 8,
    badge: "HOT",
    imageKey: "p1",
    name: "COOL BAXIŞ SKILL",
    desc: "Səni görən ikinci dəfə baxacaq.",
    price: "2 AZN",
    oldPrice: "4 AZN",
  },
  {
    id: 9,
    badge: "NEW",
    imageKey: "p2",
    name: "SƏSSİZ DOMİNANCE",
    desc: "Danışmadan belə hörmət qazan.",
    price: "3 AZN",
    oldPrice: "6 AZN",
  },
  {
    id: 10,
    badge: "TRENDING",
    imageKey: "p3",
    name: "ROOM ENTRY EFFECT",
    desc: "Otağa girəndə hamı səni hiss etsin.",
    price: "4 AZN",
    oldPrice: "8 AZN",
  },
  {
    id: 11,
    badge: "BEST",
    imageKey: "p4",
    name: "FIRST IMPRESSION PRO",
    desc: "İlk təəssürat = qələbə.",
    price: "5 AZN",
    oldPrice: "10 AZN",
  },
  {
    id: 12,
    badge: "HOT",
    imageKey: "p5",
    name: "ALPHA WALK",
    desc: "Yeriyişinlə belə fərq yarat.",
    price: "3 AZN",
    oldPrice: "6 AZN",
  },
  {
    id: 13,
    badge: "NEW",
    imageKey: "p6",
    name: "VOICE CONTROL",
    desc: "Səsinlə təsir et.",
    price: "2 AZN",
    oldPrice: "4 AZN",
  },
  {
    id: 14,
    badge: "BEST",
    imageKey: "p7",
    name: "ENERGY BOOST",
    desc: "Daxili enerjini artır.",
    price: "3 AZN",
    oldPrice: "5 AZN",
  },
  {
    id: 15,
    badge: "HOT",
    imageKey: "p8",
    name: "SOCIAL SKILL PACK",
    desc: "Hər mühitdə rahat ol.",
    price: "4 AZN",
    oldPrice: "9 AZN",
  },
  {
    id: 16,
    badge: "TRENDING",
    imageKey: "p9",
    name: "AURA MAX",
    desc: "Presence səviyyəni yüksəlt.",
    price: "6 AZN",
    oldPrice: "12 AZN",
  },
];

const detectCertificateType = (productName) => {
  const value = productName.toLowerCase();

  if (/(varli|pul|money|wealth|cash|business)/.test(value)) return "wealth";
  if (/(social|first impression|room|dominance|voice|stil|entry)/.test(value)) return "social";
  if (/(mizah|legend|fun|laugh|god mode)/.test(value)) return "humor";

  return "confidence";
};

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getAccessKey = (productName) => `cert_access:${slugify(productName)}`;

const hasProductAccess = (productName) => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(getAccessKey(productName)) === "paid";
};

const generateCertificateId = () => {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  const day = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `SS-${day}-${rand}`;
};

const fitText = (ctx, text, maxWidth, startSize, weight = "700") => {
  let size = startSize;

  while (size > 22) {
    ctx.font = `${weight} ${size}px Arial`;
    if (ctx.measureText(text).width <= maxWidth) return size;
    size -= 2;
  }

  return size;
};

const wrapText = (ctx, text, maxWidth) => {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });

  if (line) lines.push(line);
  return lines;
};

const drawRoundedRect = (
  ctx,
  x,
  y,
  w,
  h,
  r,
  fillStyle,
  strokeStyle = null,
  lineWidth = 0
) => {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();

  if (strokeStyle && lineWidth > 0) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
  }

  ctx.restore();
};

const createOrder = async (product, customerName = "") => {
  const response = await fetch(`${API_BASE}/api/create-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: product.id,
      customerName,
    }),
  });

  if (!response.ok) {
    throw new Error("Order yaradılmadı");
  }

  return response.json();
};

const markOrderPaid = async (orderId) => {
  const response = await fetch(`${API_BASE}/api/mark-paid/${orderId}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Order paid edilə bilmədi");
  }

  return response.json();
};

const getOrderStatus = async (orderId) => {
  const response = await fetch(`${API_BASE}/api/order-status/${orderId}`);

  if (!response.ok) {
    throw new Error("Order status tapılmadı");
  }

  return response.json();
};

const ProductsSection = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const [certificateName, setCertificateName] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [templateLoaded, setTemplateLoaded] = useState(false);
  const [loadingProductId, setLoadingProductId] = useState(null);

  const canvasRef = useRef(null);
  const templateImageRef = useRef(null);
  const inputRef = useRef(null);

  const normalizedProducts = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        image: imageMap[product.imageKey] || fallbackImage,
      })),
    []
  );

  useEffect(() => {
    const img = new Image();
    img.src = certificateTemplate;
    img.onload = () => setTemplateLoaded(true);
    templateImageRef.current = img;
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(activeProduct));
    return () => document.body.classList.remove("modal-open");
  }, [activeProduct]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderCertificate = (productName, customerName) => {
    const canvas = canvasRef.current;
    const templateImg = templateImageRef.current;

    if (!canvas || !templateImg || !templateLoaded) return;

    const ctx = canvas.getContext("2d");
    const type = detectCertificateType(productName);
    const profile = certificateProfiles[type];
    const now = new Date();

    const formattedDate = now.toLocaleDateString("az-AZ", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const certId = generateCertificateId();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);

    drawRoundedRect(
      ctx,
      140,
      100,
      920,
      470,
      30,
      "rgba(2, 8, 38, 0.60)",
      "rgba(255,255,255,0.08)",
      1.5
    );

    const accentGradient = ctx.createLinearGradient(300, 270, 900, 270);
    accentGradient.addColorStop(0, profile.accent[0]);
    accentGradient.addColorStop(1, profile.accent[1]);
    drawRoundedRect(ctx, 330, 248, 540, 16, 999, accentGradient);

    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";

    const titleSize = fitText(ctx, productName.toUpperCase(), 740, 54, "800");
    ctx.font = `800 ${titleSize}px Arial`;
    ctx.fillText(productName.toUpperCase(), canvas.width / 2, 205);

    ctx.font = "700 26px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.96)";
    ctx.fillText("SERTİFİKATI", canvas.width / 2, 315);

    const nameSize = fitText(ctx, customerName, 620, 44, "800");
    ctx.font = `800 ${nameSize}px Arial`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(customerName, canvas.width / 2, 405);

    ctx.font = "500 22px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText("Bu sənəd təsdiq edir ki", canvas.width / 2, 355);

    const desc = `“${productName}” məhsulunu əldə edərək ${profile.description}`;
    ctx.font = "500 20px Arial";
    const lines = wrapText(ctx, desc, 700);

    let lineY = 465;
    lines.slice(0, 3).forEach((line) => {
      ctx.fillText(line, canvas.width / 2, lineY);
      lineY += 30;
    });

    ctx.font = "700 16px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.78)";
    ctx.fillText(`${profile.shortTitle} Certificate`, canvas.width / 2, 555);

    ctx.textAlign = "left";
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 18px Arial";
    ctx.fillText(certId, 90, 628);
    ctx.font = "500 16px Arial";
    ctx.fillText(formattedDate, 90, 655);

    ctx.textAlign = "right";
    ctx.font = "700 18px Arial";
    ctx.fillText("SHITSTORE", 1110, 628);
    ctx.font = "500 16px Arial";
    ctx.fillText("Rəsmi Sertifikat Sistemi", 1110, 655);

    setPreviewSrc(canvas.toDataURL("image/png"));
  };

  useEffect(() => {
    if (
      activeProduct &&
      certificateName.trim() &&
      templateLoaded &&
      hasProductAccess(activeProduct.name)
    ) {
      renderCertificate(activeProduct.name, certificateName.trim());
    }
  }, [activeProduct, certificateName, templateLoaded, refreshKey]);

  const openModal = (product) => {
    setActiveProduct(product);
    setPreviewSrc("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const closeModal = () => {
    setActiveProduct(null);
    setPreviewSrc("");
    setCertificateName("");
  };

  const handleCardAction = async (product) => {
    if (hasProductAccess(product.name)) {
      openModal(product);
      return;
    }

    try {
      setLoadingProductId(product.id);

      const customerName = window.prompt("Sertifikatda görünəcək adı yaz");
      if (!customerName || !customerName.trim()) {
        setLoadingProductId(null);
        return;
      }

      const order = await createOrder(product, customerName.trim());

      const confirmPayment = window.confirm(
        `${product.name} üçün ${product.price} ödənişi təsdiqlə. Demo üçün OK bas.`
      );

      if (!confirmPayment) {
        setLoadingProductId(null);
        return;
      }

      await markOrderPaid(order.id);
      const updatedOrder = await getOrderStatus(order.id);

      if (updatedOrder.status === "paid") {
        window.localStorage.setItem(getAccessKey(product.name), "paid");
        setRefreshKey((prev) => prev + 1);
        setCertificateName(customerName.trim());
        openModal(product);
      } else {
        window.alert("Ödəniş statusu təsdiqlənmədi.");
      }
    } catch (error) {
      console.error(error);
      window.alert("Backend ilə bağlantıda problem oldu.");
    } finally {
      setLoadingProductId(null);
    }
  };

  const ensurePreview = () => {
    if (!activeProduct || !certificateName.trim()) {
      window.alert("Əvvəl adı yaz.");
      return false;
    }

    if (!hasProductAccess(activeProduct.name)) {
      window.alert("Bu sertifikat yalnız ödənişdən sonra açılır.");
      return false;
    }

    if (!templateLoaded) {
      window.alert("Sertifikat şablonu hələ yüklənməyib.");
      return false;
    }

    renderCertificate(activeProduct.name, certificateName.trim());
    return true;
  };

  const handleDownload = () => {
    if (!ensurePreview()) return;

    const link = document.createElement("a");
    const safeName = certificateName.trim().replace(/\s+/g, "-").toLowerCase();
    const safeProduct = activeProduct.name.replace(/\s+/g, "-").toLowerCase();

    link.href = canvasRef.current.toDataURL("image/png");
    link.download = `${safeProduct}-${safeName || "sertifikat"}.png`;
    link.click();
  };

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="products__wrapper">
            {normalizedProducts.map((product) => {
              const isOwned = hasProductAccess(product.name);
              const isLoading = loadingProductId === product.id;

              return (
                <div className="product__card" key={`${product.id}-${product.name}`}>
                  <span className="card__badge">{product.badge}</span>

                  <div className="product__image-box">
                    <img src={product.image} alt={product.name} />
                  </div>

                  <h2 className="product__name">{product.name}</h2>
                  <p className="product__desc">{product.desc}</p>

                  <div className="product__price-box">
                    <span className="product__price">{product.price}</span>
                    <span className="product__old-price">{product.oldPrice}</span>
                  </div>

                  <button
                    type="button"
                    className={`product__buy ${isOwned ? "is-owned" : ""}`}
                    onClick={() => handleCardAction(product)}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "YÜKLƏNİR..."
                      : isOwned
                      ? "SERTİFİKATI AÇ"
                      : "İNDİ AL"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div
        className={`certificate-modal ${activeProduct ? "is-open" : ""}`}
        aria-hidden={!activeProduct}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
      >
        <div className="certificate-modal__dialog">
          <button
            type="button"
            className="certificate-modal__close"
            aria-label="Bağla"
            onClick={closeModal}
          >
            ×
          </button>

          <div className="certificate-modal__left">
            <p className="certificate-modal__eyebrow">Şəxsi sertifikat</p>

            <h3>
              {activeProduct
                ? `${activeProduct.name} — sertifikat hazırla`
                : "Sertifikat hazırla"}
            </h3>

            <p className="certificate-modal__text">
              Adı yaz, preview gör, sonra sertifikatı yüklə.
            </p>

            <label className="certificate-modal__label" htmlFor="certificateName">
              Sertifikatda görünəcək ad
            </label>

            <input
              ref={inputRef}
              className="certificate-modal__input"
              id="certificateName"
              type="text"
              placeholder="Məs: Əli Məmmədov"
              maxLength={50}
              value={certificateName}
              onChange={(event) => setCertificateName(event.target.value)}
            />

            <div className="certificate-modal__actions">
              <button
                type="button"
                className="certificate-action certificate-action--ghost"
                onClick={ensurePreview}
              >
                Preview
              </button>

              <button
                type="button"
                className="certificate-action"
                onClick={handleDownload}
              >
                Yüklə
              </button>
            </div>
          </div>

          <div className="certificate-modal__right">
            {previewSrc ? (
              <img src={previewSrc} alt="Sertifikat preview" />
            ) : (
              <div className="certificate-modal__placeholder">
                Preview burada görünəcək
              </div>
            )}
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} width={1200} height={700} hidden />
    </>
  );
};

export default ProductsSection;