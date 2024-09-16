import { AddCircleIcon } from 'hugeicons-react'

interface addBlockProp {
    onClick: () => void
}

const AddBlock: React.FC<addBlockProp> = ({onClick}) => {
    return (

    <div className="min-w-40 min-h-40 max-w-40 max-h-40 p-6 bg-white border-2 border-black rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer flex flex-row items-center justify-center"
    onClick={onClick}>
        <AddCircleIcon size={50} color='#000000'/>
    </div>

    )
}

export default AddBlock