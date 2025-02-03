// components/skeleton-services.tsx
"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonServices() {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <Skeleton className="h-8 w-48 mx-auto mb-12" />

                <div className="relative overflow-hidden">
                    <div className="flex gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex-[0_0_300px] md:flex-[0_0_400px]">
                                <Skeleton className="h-[400px] w-full rounded-xl" />
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}