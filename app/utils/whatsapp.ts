import { STORE_INFO, Product } from "@/app/data/products";

export function generateWhatsAppItemLink(product: Product, quantity: number = 1): string {
  const message = `Hello ${STORE_INFO.name}! 👋\n\nI would like to order / inquire about the following electric item:\n\n⚡ *Product:* ${product.name}\n🏷️ *Brand:* ${product.brand}\n🛡️ *Warranty:* ${product.warranty}\n📦 *Quantity:* ${quantity}\n\nPlease confirm availability and island-wide delivery details to my location. Thank you!`;
  
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppCartLink(cartItems: { product: Product; quantity: number }[], deliveryCity: string = ""): string {
  let message = `Hello ${STORE_INFO.name}! 👋\n\nI want to place an order for the following items from your online electric store:\n\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.product.name}*\n   • Qty: ${item.quantity}\n   • Warranty: ${item.product.warranty}\n\n`;
  });

  if (deliveryCity) {
    message += `📍 *Delivery Location:* ${deliveryCity}\n`;
  }
  message += `\nPlease guide me through payment (COD/Bank Transfer) and fast delivery!`;

  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppGeneralLink(customNote: string = ""): string {
  const defaultText = customNote 
    ? `Hello ${STORE_INFO.name}, ${customNote}`
    : `Hello ${STORE_INFO.name}! 👋 I am visiting your online electric store and would like to ask a question.`;
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
}
