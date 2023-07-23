import Link from "next/link"

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between bg-base-100 text-primary font-bold p-4">
        <div>Admin: All updates take about one minute to take effect.</div>
        <div>
          <Link href="https://github.com/briantruan/bnc-cornell-app/issues/new/choose" className="btn btn-sm btn-primary btn-outline">Report an Issue</Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}