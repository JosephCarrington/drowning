/*
 * Copyright 2010 by Dan Fabulich.
 *
 * Dan Fabulich licenses this file to you under the
 * ChoiceScript License, Version 1.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.choiceofgames.com/LICENSE-1.0.txt
 *
 * See the License for the specific language governing
 * permissions and limitations under the License.
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied.
 */


// Specify the list of scenes here, separated by commas, with no final comma


nav = new SceneNavigator([
	'startup',
	'night_1',
	'dream_1',
	'trees',
	'cries',
	'stretching',
	'stretching_2',
	'cold',
	'echo',
	'end'
]);

// Specify the default starting stats here

stats = {
	mother_haunted: false,
	mother_gone: false,
	jane_bravery_vs_caution: 50,
	crash: false,
	jane_sleeps_with_child : false,
	true_name: '',
	jane_injuries: 0,
	jane_horror: 0,
	pronunciation: '',
	fog: false,
	fog_off: false,
	black: false,
	black_off: false

};

debugStats = stats;
