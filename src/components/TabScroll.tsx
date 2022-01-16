import React, {
	createContext,
	FC,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react"

const Context = createContext<{
	tab?: {
		id: string
		type: string
	}
	setTab?: React.Dispatch<
		React.SetStateAction<{
			type: string
			id: string
		}>
	>
	tabs?: ITab[]
	contents?: IContent[]
}>({})

const Content: FC = () => {
	const $ref = useRef<{ [key: string]: HTMLDivElement }>({})
	const containerRef = useRef<HTMLDivElement>()
	const { tab, setTab, contents } = useContext(Context)
	const currentTab = useRef<string>(tab!.id!)

	useEffect(() => {
		if (tab?.type !== "scroll") {
			scrollTo(tab!.id)
		}
	}, [tab])

	const addRef = (ref: any) => {
		if (!ref) return
		$ref.current[ref.id] = ref
	}

	const scrollTo = (id: string) => {
		const top = $ref.current[id].offsetTop - containerRef.current!.offsetTop
		containerRef.current!.scrollTo({ top, behavior: "smooth" })
	}

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const { offsetTop, scrollTop } = e.nativeEvent.target as any

		const posY = offsetTop + scrollTop

		const keys: any = []

		Object.entries($ref.current).forEach(([k, v]) => {
			if (posY >= v.offsetTop) {
				keys.push(k)
				return
			}
		})

		const snap = keys[keys.length - 1]
		if (currentTab.current != snap) {
			currentTab.current = snap
			setTab!({
				id: snap,
				type: "scroll",
			})
		}
	}

	return (
		<div
			className="col-span-8 h-96 sm:h-auto overflow-y-scroll px-8 sm:mt-0 mt-6 sm:overflow-x-clip overflow-x-scroll"
			ref={(e) => (containerRef.current = e!)}
			onScroll={handleScroll}
		>
			<div className="space-y-12">
				{contents!.map((e) => (
					<div key={e.id} id={e.id} ref={addRef} >
						{e.content}
					</div>
				))}
			</div>
		</div>
	)
}

const Tabs = () => {
	const { tab, setTab, tabs } = useContext(Context)

	const activeTabStyle = (id: string) =>
		tab!.id === id ? "bg-orange-500 text-lg text-white" : ""
	return (
		<div className="col-span-4 text-black pr-8 space-y-3 border-r sm:border-b-0 border-b sm:pb-0 pb-6 sm:shadow-none shadow-lg">
			{tabs!.map((e) => (
				<div
					className={`
						transition-all
						duration-300
						px-3 
						py-1 
						rounded-r-full 
						cursor-pointer
						hover:bg-orange-500
						hover:text-lg
						hover:text-white
						${activeTabStyle(e.id)}
					`}
					key={e.id}
					onClick={() => setTab!({ id: e.id, type: "click" })}
				>
					{e.title}
				</div>
			))}
		</div>
	)
}

interface ITab {
	id: string
	title: string | JSX.Element
}

interface IContent {
	id: string
	content: JSX.Element
}

interface Props {
	tabs: ITab[]
	contents: IContent[]
	className?: string
}

const TabScroll: FC<Props> = (props) => {
	const [tab, setTab] = useState({
		type: "",
		id: props.tabs[0].id,
	})
	const value = {
		tab,
		setTab,
		tabs: props.tabs,
		contents: props.contents,
	}
	return (
		<Context.Provider value={value}>
			<div className={props.className}>
				<div className="grid sm:grid-cols-12 grid-cols-1 sm:h-[32rem] h-auto shadow-lg py-6 rounded-lg border-2 bg-white">
					<Tabs />
					<Content />
				</div>
			</div>
		</Context.Provider>
	)
}

export default TabScroll
