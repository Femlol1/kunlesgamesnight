import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type DropdownProps = {
    value?: string
    onChangeHandler?: (value: string) => void
}

const DropDown = ({ value, onChangeHandler}: DropdownProps ) => {
    // const [first, setfirst] = useState(second)
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default DropDown