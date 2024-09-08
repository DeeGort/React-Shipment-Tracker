interface StatusCardProps {
    icon: unknown,
    status: string
}

export function StatusCard({
    icon,
    status,
}: StatusCardProps) {
    return (
        <div className="status-card">
            <div className="status-icon">
                <img src={icon as string} alt={status}/>
            </div>
            <div className="status-text">
                {status}
            </div>
        </div>
    );
}