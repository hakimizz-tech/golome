import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function createGlitchEffect(text: string, iterations: number = 3): string[] {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const result: string[] = [];
  
  for (let i = 0; i < iterations; i++) {
    let glitchedText = '';
    
    for (let j = 0; j < text.length; j++) {
      // 30% chance to replace with a random character
      if (Math.random() < 0.3) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        glitchedText += randomChar;
      } else {
        glitchedText += text[j];
      }
    }
    
    result.push(glitchedText);
  }
  
  // Add the original text as the final state
  result.push(text);
  
  return result;
}
