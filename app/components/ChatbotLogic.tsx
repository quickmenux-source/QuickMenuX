// ChatbotLogic.tsx

// ✨ Your FAQ database
const faqs = [
  {
    question: "how do i place an order",
    answer:
      "You can place an order by scanning the QR code on your table or menu stand. Browse items, add them to cart, and confirm checkout.",
  },
  {
    question: "what is quickmenux",
    answer:
      "QuickMenuX is a digital-first platform that replaces traditional menus with smart QR codes. It lets you scan, browse, and order food directly from your phone.",
  },
  {
    question: "do i need to sign up to order",
    answer:
      "No, you can order as a guest. But signing up gives you faster checkout, order history, and rewards.",
  },
  {
    question: "can i pick up my order",
    answer:
      "Yes! When placing your order, just select the 'Pickup' option at checkout instead of delivery.",
  },
  {
    question: "what’s the average delivery time",
    answer:
      "Delivery usually takes 25–40 minutes depending on your location and restaurant’s workload.",
  },
  {
    question: "who created quickmenux",
    answer:
      "QuickMenuX was created by Muqaddas Fatima with the vision to simplify dining experiences using technology.",
  },
  {
    question: "what’s your motive",
    answer:
      "Our motive is to make dining smarter, faster, and more convenient by blending hospitality with modern technology.",
  },
  {
    question: "how does quickmenux work",
    answer: "Scan → Browse → Order → Pay → Enjoy! That’s it. No waiting for staff, no outdated menus.",
  },
  {
    question: "is quickmenux safe to use",
    answer:
      "Yes! We prioritize customer safety with secure payments and verified restaurant partners.",
  },
  {
  question: "What is QuickMenuX?",
  answer:
    "QuickMenuX is a smart digital menu platform that replaces traditional paper menus with QR codes, letting customers scan, browse, and order directly from their phones.",
},
{
  question: "How does QuickMenuX work?",
  answer:
    "Restaurants set up their digital menu on QuickMenuX. Customers simply scan the QR code placed on tables, view the menu instantly, customize their orders, and place them directly without waiting for a server.",
},
{
  question: "Why should restaurants use QuickMenuX?",
  answer:
    "QuickMenuX helps restaurants save time, reduce printing costs, speed up service, and provide a modern dining experience that customers love.",
},
{
  question: "Is QuickMenuX available worldwide?",
  answer:
    "Yes! QuickMenuX is designed to work globally, and any restaurant can onboard with us. We are continuously expanding to support more regions and languages.",
},
{
  question: "Who created QuickMenuX?",
  answer:
    "QuickMenuX was created by a passionate team of innovators focused on transforming dining through technology, blending convenience with smart restaurant solutions.",
},
{
  question: "What inspired QuickMenuX?",
  answer:
    "QuickMenuX was inspired by the need for safe, contactless dining during the pandemic and the vision to modernize restaurant service for the future.",
},
{
  question: "What makes QuickMenuX different from other ordering apps?",
  answer:
    "Unlike other apps, QuickMenuX is fully customizable, fast, and built to support restaurants of all sizes. It’s not just about online orders, but about upgrading the entire dine-in and delivery experience.",
},
{
  question: "Is QuickMenuX only for restaurants?",
  answer:
    "No! QuickMenuX can be used by cafes, food courts, cloud kitchens, and even events that need quick, smart, and digital menu solutions.",
},
{
  question: "Can I use QuickMenuX on my phone?",
  answer:
    "Absolutely! QuickMenuX is mobile-first. Customers can scan QR codes and order through their smartphones without downloading any heavy apps.",
},
{
  question: "How do I scan the QR code to see the menu?",
  answer:
    "Simply open your phone’s camera, point it at the restaurant’s QR code, and tap the link that appears. You’ll instantly see the menu in your browser.",
},
{
  question: "Do I need an app to order with QuickMenuX?",
  answer:
    "No app required! QuickMenuX works directly in your mobile browser. Just scan, browse, and order.",
},
{
  question: "Can I customize my order?",
  answer:
    "Yes! You can add notes, choose portion sizes, remove ingredients, or request extras depending on the restaurant’s options.",
},
{
  question: "How do I add or remove items from my cart?",
  answer:
    "Tap the + or – buttons next to each item to adjust quantities, or press ‘Remove’ to take an item out of your cart.",
},
{
  question: "Can I view nutritional info in the menu?",
  answer:
    "Yes, if the restaurant provides it. Many menus on QuickMenuX include calorie counts and detailed nutrition facts.",
},
{
  question: "Can I see pictures of food before ordering?",
  answer:
    "Absolutely! Restaurants can upload real photos of their dishes so you can see what you’re ordering.",
},
{
  question: "How do I know if a restaurant is halal/vegan-friendly?",
  answer:
    "QuickMenuX highlights dietary labels like Halal, Vegan, Vegetarian, and Gluten-Free when restaurants provide this information.",
},
{
  question: "What if I have food allergies?",
  answer:
    "You can check allergy labels in the menu and add special instructions for the restaurant before confirming your order.",
},
 {
        question: "Can I order for pickup using QuickMenuX?",
        answer: "Yes, QuickMenuX allows you to place pickup orders. Just choose 'Pickup' at checkout and collect your food when it’s ready."
      },
      {
        question: "Does QuickMenuX support home delivery?",
        answer: "Yes, if the restaurant offers delivery. You’ll see the delivery option at checkout if it’s available."
      },
      {
        question: "How long does delivery take?",
        answer: "Delivery time depends on the restaurant and your location. Estimated times are shown during checkout."
      },
      {
        question: "How do I track my order?",
        answer: "You can track your order status in real-time within QuickMenuX after placing it."
      },
      {
        question: "What happens if my order is late?",
        answer: "If your order is late, you can contact the restaurant directly through QuickMenuX or use the support option in the app."
      },
      {
        question: "Can I schedule my pickup in advance?",
        answer: "Yes, many restaurants allow you to schedule pickups for a specific time. You’ll see this option during checkout."
      },
      {
        question: "What if my food is missing or incorrect?",
        answer: "If your order is missing items or incorrect, you can report the issue directly through QuickMenuX support or contact the restaurant."
      },
       {
        question: "How does QuickMenuX work for dine-in?",
        answer: "Simply scan the QR code at your table to view the menu, place your order, and even pay—no waiting for a waiter."
      },
      {
        question: "Do I still need a waiter if I use QuickMenuX?",
        answer: "Not necessarily. QuickMenuX lets you order and pay directly, but staff will still serve your food and assist if needed."
      },
      {
        question: "Can I pay the bill from QuickMenuX?",
        answer: "Yes, you can pay securely within QuickMenuX using your preferred payment method."
      },
      {
        question: "Can multiple people at the same table order separately?",
        answer: "Yes, each person can scan the QR code and order from their own device. The restaurant will receive all orders together."
      },
      {
        question: "How do I split the bill?",
        answer: "QuickMenuX supports bill-splitting, so each person can pay their share directly from their device."
      },
      {
        question: "Is QuickMenuX faster than traditional dining?",
        answer: "Yes! By skipping wait times for menus, ordering, and payment, QuickMenuX makes dining quicker and smoother."
      },
      // Payments
{
  question: "What payment methods are supported?",
  answer: "QuickMenuX supports credit/debit cards, mobile wallets, and other secure payment methods depending on your region."
},
{
  question: "Is it safe to pay through QuickMenuX?",
  answer: "Yes! All transactions are encrypted and processed through trusted, secure payment gateways."
},
{
  question: "Can I save my card details for future?",
  answer: "Yes, you can securely save your card details for faster checkout. We use tokenization to keep your data safe."
},
{
  question: "Do you support Apple Pay / Google Pay?",
  answer: "Yes! QuickMenuX supports Apple Pay and Google Pay for a smooth and secure payment experience."
},
{
  question: "What if my payment fails?",
  answer: "If your payment fails, please check your card details or try another method. You can also contact support if the issue continues."
},
{
  question: "Can I get a refund?",
  answer: "Refunds are handled according to restaurant policies. If eligible, your refund will be processed back to your original payment method."
},
{
  question: "Are there any hidden charges?",
  answer: "No hidden charges. You only pay for your order and any applicable taxes or delivery fees shown at checkout."
},

// Account & Registration
{
  question: "How do I create an account on QuickMenuX?",
  answer: "You can sign up using your email or phone number directly in the QuickMenuX app or website."
},
{
  question: "Do I need to sign up to use QuickMenuX?",
  answer: "No, you can browse menus without signing up. However, registration is required to place orders and make payments."
},
{
  question: "How do I log in to my account?",
  answer: "Simply enter your registered email/phone and password on the login page, or use Google/Facebook login if linked."
},
{
  question: "I forgot my password, what do I do?",
  answer: "Click on ‘Forgot Password’ at login and follow the instructions to reset it securely."
},
{
  question: "Can I use QuickMenuX without registration?",
  answer: "Yes, for browsing menus. But ordering, payments, and saving preferences require an account."
},
{
  question: "Can I link my Google or Facebook account?",
  answer: "Yes, QuickMenuX allows easy login with Google or Facebook for a faster experience."
},
{
  question: "How do I delete my account?",
  answer: "Go to Settings > Account > Delete Account. Once deleted, your data will be permanently removed."
},

// For Restaurants
{
  question: "How can a restaurant partner with QuickMenuX?",
  answer: "Restaurants can sign up on our website or app by filling out a partnership form. Our team will assist with onboarding."
},
{
  question: "How do I add my restaurant menu?",
  answer: "Once registered, you can upload your menu and update items easily through the restaurant dashboard."
},
{
  question: "Can I update my prices anytime?",
  answer: "Yes! Restaurants can update prices, availability, and menu items anytime from their dashboard."
},
{
  question: "Does QuickMenuX charge commission?",
  answer: "Yes, a small commission is charged per order. Details will be shared during the onboarding process."
},
{
  question: "Do restaurants need special hardware?",
  answer: "No special hardware is needed. A smartphone, tablet, or computer with internet is enough."
},
{
  question: "Can QuickMenuX integrate with my POS system?",
  answer: "Yes, QuickMenuX supports POS integration for smoother order management. Contact support for setup."
},
{
  question: "How do restaurants get paid?",
  answer: "Payments are securely transferred to the restaurant’s registered bank account on a regular settlement cycle."
},
// Pickup & Delivery
{
  question: "Can I order for pickup using QuickMenuX?",
  answer: "Yes! QuickMenuX lets you place orders for pickup, so your food is ready when you arrive."
},
{
  question: "Does QuickMenuX support home delivery?",
  answer: "Yes, QuickMenuX partners with restaurants that offer delivery services. Availability may vary by location."
},
{
  question: "How long does delivery take?",
  answer: "Delivery times depend on the restaurant and your location, but you’ll see an estimated time before placing your order."
},
{
  question: "How do I track my order?",
  answer: "You can track your order status in real-time through the QuickMenuX app."
},
{
  question: "What happens if my order is late?",
  answer: "If your order is late, QuickMenuX will notify you with updates and you can contact the restaurant directly."
},
{
  question: "Can I schedule my pickup in advance?",
  answer: "Yes! QuickMenuX allows you to schedule a pickup order for a later time that’s convenient for you."
},
{
  question: "What if my food is missing or incorrect?",
  answer: "In case of missing or incorrect items, you can report the issue through QuickMenuX support or contact the restaurant directly."
},

// Dining Experience
{
  question: "How does QuickMenuX work for dine-in?",
  answer: "Simply scan the QR code at your table, browse the menu, place your order, and pay—all from your phone."
},
{
  question: "Do I still need a waiter if I use QuickMenuX?",
  answer: "No, QuickMenuX reduces the need for a waiter. However, staff will still serve your food and assist when needed."
},
{
  question: "Can I pay the bill from QuickMenuX?",
  answer: "Yes, you can securely pay your bill directly through QuickMenuX without waiting for the waiter."
},
{
  question: "Can multiple people at the same table order separately?",
  answer: "Yes! Each person can scan the QR code and order from their own device. Orders will be linked to the same table."
},
{
  question: "How do I split the bill?",
  answer: "QuickMenuX lets you split the bill among diners so everyone can pay their share easily."
},
{
  question: "Is QuickMenuX faster than traditional dining?",
  answer: "Yes! By skipping wait times for menus, ordering, and payment, QuickMenuX makes dining quicker and smoother."
},
// For Restaurants
{
  question: "How can a restaurant partner with QuickMenuX?",
  answer: "Simply sign up on our platform, submit your restaurant details, and our team will help you get started quickly."
},
{
  question: "How do I add my restaurant menu?",
  answer: "You can upload your menu directly through the restaurant dashboard or let our team assist you."
},
{
  question: "Can I update my prices anytime?",
  answer: "Yes, you can easily update menu items, descriptions, and prices in real time."
},
{
  question: "Does QuickMenuX charge commission?",
  answer: "We offer flexible pricing plans. Depending on your subscription, there may be a small service fee per order."
},
{
  question: "Do restaurants need special hardware?",
  answer: "No. All you need is a smartphone, tablet, or computer with internet access."
},
{
  question: "Can QuickMenuX integrate with my POS system?",
  answer: "Yes, QuickMenuX supports POS integrations to make order management seamless."
},
{
  question: "How do restaurants get paid?",
  answer: "Payments are securely transferred to the restaurant’s registered bank account on a regular settlement cycle."
},

// Technical & Development
{
  question: "Is QuickMenuX built with AI?",
  answer: "Yes, QuickMenuX uses AI to enhance menu recommendations, ordering experience, and customer insights."
},
{
  question: "Which technologies power QuickMenuX?",
  answer: "QuickMenuX is powered by cloud computing, AI, secure databases, and modern web technologies for speed and reliability."
},
{
  question: "Who developed QuickMenuX?",
  answer: "QuickMenuX was developed by a passionate tech team specializing in food tech and AI innovation."
},
{
  question: "Is QuickMenuX a startup or a company?",
  answer: "QuickMenuX started as a startup and is growing rapidly into a global food-tech company."
},
{
  question: "Can QuickMenuX handle thousands of orders at once?",
  answer: "Absolutely! Our system is designed to scale and handle high traffic efficiently."
},
{
  question: "Is QuickMenuX cloud-based?",
  answer: "Yes, everything runs on the cloud to ensure fast performance and easy updates."
},
{
  question: "How secure is customer data?",
  answer: "We use industry-standard encryption and security practices to keep data safe."
},

// Our Story & Vision
{
  question: "Who is the founder of QuickMenuX?",
  answer: "QuickMenuX was founded by innovators passionate about transforming the dining experience."
},
{
  question: "What’s the journey behind QuickMenuX?",
  answer: "It began with the idea of making menus smarter, faster, and contactless for the digital age."
},
{
  question: "Why did you build QuickMenuX?",
  answer: "To help restaurants digitize menus, reduce costs, and give customers a seamless ordering experience."
},
{
  question: "What problem does QuickMenuX solve?",
  answer: "It eliminates outdated paper menus, reduces wait times, and empowers restaurants with digital tools."
},
{
  question: "Where do you see QuickMenuX in 5 years?",
  answer: "Becoming the leading smart dining solution worldwide, serving millions of restaurants and customers."
},
{
  question: "What is QuickMenuX’s mission?",
  answer: "To revolutionize dining by merging technology with hospitality in the simplest way."
},
{
  question: "What motivates your team?",
  answer: "Seeing restaurants grow, customers smile, and the dining experience become smarter every day."
},

// Troubleshooting
{
  question: "I scanned the QR code but nothing shows, what do I do?",
  answer: "Check your internet connection and refresh the page. If the issue continues, contact support."
},
{
  question: "My app is not loading, how can I fix it?",
  answer: "Try restarting the app or clearing your browser cache."
},
{
  question: "Why can’t I place an order?",
  answer: "Ensure your payment method is valid and the restaurant is currently accepting orders."
},
{
  question: "Why am I not receiving confirmation messages?",
  answer: "Check your spam folder or verify your phone/email details in the app."
},
{
  question: "How do I contact support?",
  answer: "You can reach us through the in-app chat, email, or our 24/7 support helpline."
},
{
  question: "Can I cancel my order after placing it?",
  answer: "Yes, you can cancel your order within a short time after placing it. Cancellation policies depend on the restaurant."
},
{
  question: "Who created QuickMenuX?",
  answer: "QuickMenuX was founded and developed by Muqaddas Fatima and Syed Muhammad Huzaifa Khan. As passionate innovators, they wanted to modernize dining with smart, contactless technology."
},
{
  question: "Why was QuickMenuX created?",
  answer: "We created QuickMenuX to solve the everyday dining struggles—long waits, missing menus, slow service, and payment delays. Our goal is to make dining faster, easier, and more enjoyable for everyone."
},
{
  question: "What is the story behind QuickMenuX?",
  answer: "The idea came when our founders experienced the frustration of waiting too long just to get a menu and place an order. That’s when they envisioned a smart, QR-based dining solution to bring restaurants and customers closer."
},
{
  question: "Who are the developers and CEO of QuickMenuX?",
  answer: "QuickMenuX is proudly built and led by Muqaddas Fatima and Syed Muhammad Huzaifa Khan, combining creativity and technology to deliver a smarter dining experience."
},
{
  question: "What if the restaurant doesn’t accept QuickMenuX?",
  answer: "You can only use QuickMenuX at partner restaurants. Look for the QuickMenuX QR code at your table or counter."
},
{
  question: "Is QuickMenuX available in my city?",
  answer: "We are expanding rapidly! Check our website or app to see if QuickMenuX is active in your area."
},
{
  question: "Do I need to download an app to use QuickMenuX?",
  answer: "No! Just scan the QR code with your phone camera to access the menu instantly."
},
{
  question: "Does QuickMenuX work on all devices?",
  answer: "Yes, QuickMenuX works on any smartphone with internet access—no special setup needed."
},
{
  question: "Does the menu update in real-time?",
  answer: "Yes, restaurants update availability instantly so you always see the latest menu options."
},
{
  question: "Can I customize my order?",
  answer: "Of course! You can add notes or special instructions before placing your order."
},
{
  question: "Can I cancel or change my order?",
  answer: "Yes, if the restaurant hasn’t started preparing your food yet, you can cancel or update your order."
},
{
  question: "Is my payment information safe on QuickMenuX?",
  answer: "Yes! QuickMenuX uses encrypted payment gateways to ensure your card and transaction details remain secure."
},
{
  question: "Can I use cash instead of online payment?",
  answer: "Yes, depending on the restaurant’s policy, you may have the option to pay by cash at pickup or delivery."
},

];

// ✨ FAQ search function
function findFAQ(userMessage: string) {
  const normalized = userMessage.toLowerCase();

  // Exact or partial match
  return faqs.find((faq) => normalized.includes(faq.question));
}

// ✨ Main bot reply function (called in your Chatbot.tsx)
export async function getBotReply(userMessage: string) {
  const faq = findFAQ(userMessage);

  if (faq) {
    return faq.answer;
  } else {
    return "🤔 Sorry, I don’t have an answer for that yet. Please ask about orders, delivery, pickup, or our brand!";
  }
}
