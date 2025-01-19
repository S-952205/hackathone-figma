import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb className="w-[123px] ml-4 h-[22px] mb-[20px] flex flex-row justify-center items-center">
      <BreadcrumbList>
        <BreadcrumbItem className="text-[16px] font-Satoshi font-[400] text-black/60">
            <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="h-[16px] w-[16px]"/>
        <BreadcrumbItem className="text-[16px] font-Satoshi font-[400] text-black">
        <Link href="/category">Casual</Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
