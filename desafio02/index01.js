class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class PaymentProcessor {
  constructor(system) {
    this.system = system;
  }

  pay(amount) {
    this.system.makePayment(amount);
  }
}

// Adapter 
class ModernPaymentAdapter {
  constructor(api) {
    this.api = api;
  }

  makePayment(amount) {
    const amountInCents = Math.round(amount * 100);
    this.api.process(amountInCents);
  }
}

// Cliente
const modernApi = new ModernPaymentAPI();
const modernAdapter = new ModernPaymentAdapter(modernApi);
const processor = new PaymentProcessor(modernAdapter);
processor.pay(100);