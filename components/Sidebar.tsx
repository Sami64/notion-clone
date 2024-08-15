import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import NewDocumentButton from './NewDocumentButton'

const Sidebar = () => {
	const menuOptions = (
		<>
			<NewDocumentButton />
		</>
	)
	return (
		<div className="p-2 md:p-5 bg-gray-200 relative">
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger>
						<MenuIcon
							className="p-2 hover:opcaity-30 rounded-lg"
							size={40}
						/>
					</SheetTrigger>
					<SheetContent side="left">
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
						</SheetHeader>
						{menuOptions}
					</SheetContent>
				</Sheet>
			</div>

			<div className="hidden md:inline">{menuOptions}</div>
		</div>
	)
}
export default Sidebar
