import { products } from "../Data/ProductPrice";

const phone = "919711119771";

export default function generateProductListMessage() {
  let msg = "Hello \nPlease select a product to view price:\n\n";

  products.forEach((p) => {
    const priceMessage = `Product: ${p.name}\nPrice: ${p.price}`;

    const priceLink = `https://wa.me/${phone}?text=${encodeURIComponent(
      priceMessage
    )}`;

    msg += `${p.name}\n`;
    msg += `View Price: ${priceLink}\n\n`;
  });

  return encodeURIComponent(msg);
}
