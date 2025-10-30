'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendInquiry(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a delay.
  console.log('New inquiry received:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Message:', parsed.data.message);

  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  // if (Math.random() > 0.5) {
  //   return { success: false, error: 'Failed to send message. Please try again later.' };
  // }
  
  return { success: true };
}
