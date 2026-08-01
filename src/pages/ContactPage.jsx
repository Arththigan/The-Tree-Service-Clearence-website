import React, { useEffect } from 'react';
import { Award, Mail, MapPin, PhoneCall } from 'lucide-react';
import PageIntro from '../components/PageIntro';

const details = [
  [PhoneCall, '24/7 Phone', '(800) 555-TREE'],
  [Mail, 'Email', 'service@pulsecx.com'],
  [MapPin, 'Service Area', 'Residential & Commercial'],
  [Award, 'Credentials', 'ISA Certified & Insured'],
];

export default function ContactPage() {
  useEffect(() => {
    const scriptId = 'tree-services-form-embed-script';
    document.getElementById(scriptId)?.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://app.treeservicesclarence.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <main>
      <PageIntro
        eyebrow="Contact Our Arborist Team"
        title="Request Your Free Tree Inspection"
        copy="Share a few details about your property. Our team will contact you to confirm the safest next step."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-4">
          {details.map(([Icon, label, value]) => (
            <div key={label} className="flex gap-3 rounded-xl border bg-card p-4">
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-bold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="min-w-0 w-full lg:col-span-8">
          <iframe
            src="https://app.treeservicesclarence.com/widget/form/cGyO0nt09Z8sQ1ceJ7aC"
            className="block h-[1011px] min-w-full max-w-full border-0"
            style={{ width: '100%', borderRadius: '4px' }}
            id="inline-cGyO0nt09Z8sQ1ceJ7aC"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Option In Form Website"
            data-height="1011"
            data-layout-iframe-id="inline-cGyO0nt09Z8sQ1ceJ7aC"
            data-form-id="cGyO0nt09Z8sQ1ceJ7aC"
            title="Option In Form Website"
          />
        </div>
      </section>
    </main>
  );
}
