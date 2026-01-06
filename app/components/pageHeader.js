
export function PageHeader({ line1, line2, line3 }) {
    return (
    <div className="page-header">
        <h1 className="center">{line1}</h1>
        {line2 && <div className='center'>{line2}</div>}
        {line3 && <div className="center smaller">{line3}</div>}
    </div>
    )
}