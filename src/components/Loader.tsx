export default function Loader() {
    return (
        <div
            className="w-15 aspect-square -translate-1/2 left-[50%] top-[50%] absolute"
            style={{
                backgroundImage:
                    `conic-gradient(from -90deg at 10px 10px, #fff 90deg, transparent 0), ` +
                    `conic-gradient(from -90deg at 10px 10px, #fff 90deg, transparent 0), ` +
                    `conic-gradient(from -90deg at 10px 10px, #fff 90deg, transparent 0)`,
                backgroundSize: "50% 50%",
                animation: "loader-spin 1s infinite",
            }}
        />
    );
}