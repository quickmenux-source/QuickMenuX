"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  QrCode,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  ArrowRight,
  Loader2,
} from "lucide-react";

/**
 * QuickMenuX – Restaurant Signup
 * Theme: Orange (#f97316), Green (#006400 / #16a34a), White, Black (#111827)
 * Notes:
 * - Upload handlers are client-only demo; wire to your API/storage (e.g., S3/Supabase).
 * - Replace the fake submit with your real API call in onSubmit().
 */

const schema = z
  .object({
    restaurantName: z.string().min(2, "Please enter a valid restaurant name"),
    ownerName: z.string().min(2, "Please enter the owner/manager name"),
    email: z.string().email("Enter a valid email address"),
    phone: z.string().min(7, "Enter a valid phone number"),
    country: z.string().min(2, "Enter country"),
    city: z.string().min(1, "Enter city"),
    address: z.string().min(5, "Enter business address"),
    website: z.string().url("Enter a valid URL").optional().or(z.literal("")),
    cuisines: z.array(z.string()).nonempty("Select at least one cuisine"),
    seats: z
      .string()
      .refine((v) => /^\d+$/.test(v), "Enter a valid number of seats"),
    plan: z.enum(["starter", "pro", "enterprise"], {
      errorMap: () => ({ message: "Please select a plan" }),
    }),
    slug: z
      .string()
      .min(2, "Slug required")
      .regex(/^[a-z0-9-]+$/i, "Only letters, numbers and hyphens"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm your password"),
    accept: z.literal(true, {
      errorMap: () => ({ message: "You must accept terms to continue" }),
    }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof schema>;

const CUISINE_OPTIONS = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Japanese",
  "Thai",
  "Pakistani",
  "Middle Eastern",
  "American",
  "Vegan",
];

const PLANS: { key: FormValues["plan"]; name: string; price: string; features: string[] }[] = [
  { key: "starter", name: "Starter", price: "$9/mo", features: ["Unlimited menu items", "Basic QR", "Email support"] },
  { key: "pro", name: "Pro", price: "$29/mo", features: ["Custom branding", "Analytics", "Priority support"] },
  { key: "enterprise", name: "Enterprise", price: "Contact us", features: ["SLA", "Multi-location", "Account manager"] },
];

export default function SignupPage() {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [menuFiles, setMenuFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      plan: undefined as unknown as FormValues["plan"],
      cuisines: [],
      website: "",
      accept: false,
    },
  });

  // Auto slug from restaurant name
  const restaurantName = watch("restaurantName");
  useEffect(() => {
    if (!restaurantName) return;
    const slug = restaurantName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    setValue("slug", slug, { shouldValidate: true });
  }, [restaurantName, setValue]);

  const slug = watch("slug") || "";
  const publicMenuUrl = useMemo(
    () => (slug ? `https://quickmenux.com/m/${slug}` : ""),
    [slug]
  );

  // Handlers – demo only
  const onLogoChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setLogoFile(files[0]);
  };
  const onMenusChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setMenuFiles((prev) => Array.from(new Set([...prev, ...Array.from(files)])));
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitting(true);
      // Build payload
      const payload = {
        ...data,
        seats: Number(data.seats),
        logo: logoFile ? { name: logoFile.name, size: logoFile.size, type: logoFile.type } : null,
        menus: menuFiles.map((f) => ({ name: f.name, size: f.size, type: f.type })),
        publicMenuUrl,
      };

      // TODO: Replace with your real API
      // const res = await fetch("/api/signup", {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      //   headers: { "Content-Type": "application/json" },
      // });
      // if (!res.ok) throw new Error("Signup failed");

      // Simulate success
      await new Promise((r) => setTimeout(r, 1300));
      console.log("Signup payload", payload);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-[100dvh] bg-gradient-to-b from-white via-white to-[#fff8f3]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(ellipse_at_top,rgba(22,163,74,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.25),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#006400] rounded-full px-3 py-1">
              <QrCode className="h-4 w-4" /> QuickMenuX Onboarding
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
              Ditch the Paper Menu. <span className="text-[#f97316]">Scan</span>, <span className="text-[#006400]">Browse</span> & <span className="text-[#111827]">Order</span> in Seconds.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Register your restaurant, upload your menu, and get a shareable QR that opens your digital menu instantly—no app required.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#16a34a]" /> Secure</div>
              <div className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-[#f97316]" /> Works on any phone</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#16a34a]" /> No app to install</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Summary */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow ring-1 ring-black/5 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#111827]">Create your QuickMenuX account</h2>
              <p className="mt-1 text-sm text-gray-600">We’ll set up your restaurant profile and generate your QR-powered menu.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                {/* Business */}
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">Business details</h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Restaurant name</label>
                      <input {...register("restaurantName")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="e.g., Spice Garden" />
                      {errors.restaurantName && <p className="mt-1 text-xs text-red-600">{errors.restaurantName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Owner / Manager</label>
                      <input {...register("ownerName")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="e.g., Ayesha Khan" />
                      {errors.ownerName && <p className="mt-1 text-xs text-red-600">{errors.ownerName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" {...register("email")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="you@restaurant.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input {...register("phone")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="e.g., +92 300 1234567" />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Country</label>
                      <input {...register("country")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="e.g., Pakistan" />
                      {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input {...register("city")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="e.g., Karachi" />
                      {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input {...register("address")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="Street, area, building" />
                      {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address.message}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Website (optional)</label>
                      <input {...register("website")} className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="https://your-site.com" />
                      {errors.website && <p className="mt-1 text-xs text-red-600">{errors.website.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Profile */}
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">Profile</h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cuisines</label>
                      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {CUISINE_OPTIONS.map((c) => (
                          <label key={c} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 hover:border-[#f97316]">
                            <input type="checkbox" value={c} {...register("cuisines")} className="rounded text-[#f97316] focus:ring-[#f97316]" />
                            <span className="text-sm text-gray-700">{c}</span>
                          </label>
                        ))}
                      </div>
                      {errors.cuisines && <p className="mt-1 text-xs text-red-600">{errors.cuisines.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Number of seats</label>
                      <input {...register("seats")} inputMode="numeric" className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]" placeholder="e.g., 60" />
                      {errors.seats && <p className="mt-1 text-xs text-red-600">{errors.seats.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Brand & Menu Upload (demo) */}
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">Brand & Menu</h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Restaurant logo</label>
                      <label className="mt-1 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-[#f97316] cursor-pointer">
                        <Upload className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-600">Click to upload logo (PNG/JPG/SVG)</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => onLogoChange(e.target.files)} />
                        {logoFile && <span className="text-xs text-gray-700">{logoFile.name}</span>}
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Menu images</label>
                      <label className="mt-1 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-[#16a34a] cursor-pointer">
                        <ImageIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-600">Upload one or more images (PNG/JPG)</span>
                        <input multiple type="file" accept="image/*" className="hidden" onChange={(e) => onMenusChange(e.target.files)} />
                        {menuFiles.length > 0 && <span className="text-xs text-gray-700">{menuFiles.length} file(s) selected</span>}
                      </label>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Uploads are demo-only. Wire to your storage/API in production.</p>
                </div>

                {/* Plan & URL */}
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">Plan & Public URL</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {PLANS.map((p) => (
                        <label
                          key={p.key}
                          className={`group relative rounded-2xl border p-4 cursor-pointer transition shadow-sm hover:shadow ${
                            watch("plan") === p.key ? "border-[#f97316] ring-2 ring-[#f97316]" : "border-gray-200"
                          }`}
                        >
                          <input type="radio" value={p.key} {...register("plan")} className="sr-only" />
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-[#111827] font-semibold">{p.name}</div>
                              <div className="text-sm text-gray-600">{p.price}</div>
                            </div>
                            {watch("plan") === p.key && <CheckCircle2 className="h-5 w-5 text-[#16a34a]" />}
                          </div>
                          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                            {p.features.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        </label>
                      ))}
                    </div>
                    {errors.plan && <p className="-mt-2 text-xs text-red-600">{errors.plan.message}</p>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Public menu URL</label>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="inline-flex shrink-0 select-none rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-700">
                            quickmenux.com/m/
                          </span>
                          <input
                            {...register("slug")}
                            className="w-full rounded-xl border-gray-300 focus:border-[#16a34a] focus:ring-[#16a34a]"
                            placeholder="your-restaurant"
                          />
                        </div>
                        {errors.slug && <p className="mt-1 text-xs text-red-600">{errors.slug.message}</p>}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <QrCode className="h-5 w-5 text-[#111827]" />
                        <span>Use this URL in your QR codes.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">Security</h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                        type="password"
                        {...register("password")}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#16a34a] focus:ring-[#16a34a]"
                        placeholder="••••••••"
                      />
                      {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Confirm password</label>
                      <input
                        type="password"
                        {...register("confirmPassword")}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#16a34a] focus:ring-[#16a34a]"
                        placeholder="••••••••"
                      />
                      {errors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Consent + Submit */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" {...register("accept")} className="rounded text-[#f97316] focus:ring-[#f97316]" />
                  <span className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#f97316] hover:underline">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#16a34a] hover:underline">
                      Privacy
                    </Link>
                    .
                  </span>
                </div>
                {errors.accept && <p className="-mt-2 text-xs text-red-600">{errors.accept.message}</p>}

                <div className="pt-2 flex items-center justify-between gap-4">
                  <Link href="/login" className="text-sm font-medium text-[#111827] hover:underline">
                    Already have an account?
                  </Link>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#f97316] px-5 py-3 text-white font-semibold shadow hover:bg-[#fb923c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316] disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create account <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {submitted && (
                  <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <p className="font-semibold">Success! 🎉</p>
                    <p className="mt-1">
                      Your QuickMenuX account has been created (demo). Next, connect uploads and enable your public menu page at{" "}
                      <span className="font-mono">quickmenux.com/m/&lt;slug&gt;</span>.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow ring-1 ring-black/5 p-6">
                <h3 className="text-lg font-semibold text-[#111827]">Quick summary</h3>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Public menu URL</span>
                    <code className="font-mono text-[#006400]">{publicMenuUrl || "—"}</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Logo</span>
                    <span className="font-medium text-[#111827]">{logoFile ? logoFile.name : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Menu images</span>
                    <span className="font-medium text-[#111827]">{menuFiles.length}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[#111827] text-white rounded-2xl p-6">
                <h4 className="text-lg font-semibold">How QuickMenuX works</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-200">
                  <li>• Register your restaurant.</li>
                  <li>• Upload your menu images.</li>
                  <li>• We host your digital menu and generate a QR.</li>
                  <li>• Customers scan, browse, and order online.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
