import "boxicons"
const obj = [
    {
        name: "Saving",
        color: "#f9c74f",

    },
    {
        name: "Investment",
        color: 'rgb(255, 99, 132)',

    },
    {
        name: "Expense",
        color: "rgb(54,162,235)",

    },
]
const List = () => {
    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4  font-bold text-xl">History</h1>
            {
                obj.map((v, i) => <Transaction key={i} category={v} />)
            }

        </div>
    )
}




export default List


function Transaction({ category }) {
    if (!category) return null
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color}`, borderLeft: `8px solid ${category.color}` }}>
            <button className="px-3"><box-icon name="trash" size="20px" color={category.color}></box-icon></button>
            <span className="block w-full">{category.name ?? ""}</span>
        </div>
    )
}