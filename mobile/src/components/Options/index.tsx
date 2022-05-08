import { Text, View } from 'react-native';
import { Copyright } from '../Copyright';
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

interface Props {
	onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export default function Options({ onFeedbackTypeChange }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Deixe seu feedback</Text>
			<View style={styles.options}>
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<Option
						onPress={() => onFeedbackTypeChange(key as FeedbackType)}
						key={key}
						title={value.title}
						image={value.image}
					/>
				))}
			</View>
			<Copyright />
		</View>
	);
}
