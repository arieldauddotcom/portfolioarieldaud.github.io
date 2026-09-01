/* Interactive WhatsApp Automation Flow Simulator - Ariel Daud Portfolio */
window.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.flow-step');
  const logBox = document.getElementById('flow-log-box');
  
  if (!steps.length || !logBox) return;

  const flowData = {
    '1': {
      step: 'Step 1: WhatsApp Event Trigger',
      payload: `{\n  "event": "message.create",\n  "from": "+628123456789",\n  "message": "Halo Ariel, mau tanya automation n8n",\n  "timestamp": 1772435400\n}`
    },
    '2': {
      step: 'Step 2: WAHA Gateway Processing',
      payload: `{\n  "status": "gateway_parsed",\n  "session": "ariel_waha_prod",\n  "webhook_url": "https://n8n.arieldaud.com/webhook/wa-inbound",\n  "latency": "14ms"\n}`
    },
    '3': {
      step: 'Step 3: Webhook Payload Dispatch',
      payload: `{\n  "method": "POST",\n  "headers": {\n    "Content-Type": "application/json",\n    "X-WAHA-Signature": "sha256=9f8a..."\n  },\n  "status": 200\n}`
    },
    '4': {
      step: 'Step 4: n8n Workflow & API Logic',
      payload: `{\n  "workflow_id": "wf_wa_auto_reply",\n  "action": "AI_INTENT_RECOGNITION",\n  "matched_intent": "PROJECT_INQUIRY",\n  "execution_status": "SUCCESS"\n}`
    },
    '5': {
      step: 'Step 5: Automated Response Sent',
      payload: `{\n  "status": "MESSAGE_DELIVERED",\n  "recipient": "+628123456789",\n  "response_text": "Hi! Pesan kamu sudah diterima oleh n8n system Ariel Daud.",\n  "roundtrip": "420ms"\n}`
    }
  };

  steps.forEach(stepBtn => {
    stepBtn.addEventListener('click', () => {
      const id = stepBtn.getAttribute('data-step');
      if (flowData[id]) {
        steps.forEach(s => s.classList.remove('active-step'));
        stepBtn.classList.add('active-step');
        
        logBox.innerHTML = `<strong>// ${flowData[id].step}</strong>\n${flowData[id].payload}`;
      }
    });
  });
});
