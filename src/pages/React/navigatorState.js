const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
const onRouteChange = (e) => {
	setCurrentRoute(e.target.value);
};

useEffect(() => {
	window.addEventListener('popstate', onRouteChange);

	return () => {
		window.removeEventListener('popstate', onRouteChange);
	}
}, [])