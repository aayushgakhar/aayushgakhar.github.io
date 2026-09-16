import { Mail, MapPin, Send } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { profile, socials } from '../data/portfolio'

const FORM_URL =
  'https://docs.google.com/forms/d/1miRnSpRNnlKC-rnb3h0iiq2ZcmPp3H-58U1IZkZ2mQo/formResponse'

const inputStyles =
  'w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:placeholder:text-zinc-500'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's build something reliable"
      description="I'm open to backend roles and interesting systems problems. Drop a message and I'll get back to you."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="card group flex items-center gap-4 p-5 transition-colors hover:border-emerald-500/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Mail size={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Email
              </span>
              <span className="font-medium text-zinc-800 group-hover:text-emerald-600 dark:text-zinc-200 dark:group-hover:text-emerald-400">
                {profile.email}
              </span>
            </span>
          </a>

          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <MapPin size={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Location
              </span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                {profile.location}
              </span>
            </span>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Elsewhere
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              {socials.map((social) => (
                <SocialIcon key={social.label} social={social} showLabel />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action={FORM_URL}
            method="POST"
            target="_blank"
            className="card space-y-5 p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="entry.2005620554"
                required
                placeholder="Ada Lovelace"
                className={inputStyles}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="entry.1045781291"
                required
                placeholder="ada@example.com"
                className={inputStyles}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="entry.839337160"
                required
                rows={5}
                placeholder="Tell me about the role or the problem..."
                className={`${inputStyles} resize-y`}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              <Send size={16} />
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}