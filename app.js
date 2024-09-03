const { Client, GatewayIntentBits, Collection, Message, ActivityType, EmbedBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, ActionRowBuilder, PermissionFlagsBits, Embed } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { exec } = require('child_process');
const venv = require('dotenv');
const express = require('express');

venv.config();
const token = process.env.bot_token
const id = '1280261422743293973'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const channel = client.channels.cache.get('1280285596258009199');
client.commands = new Collection();


const AperolSpritzEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue AperolSpritz bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Aperol-Spritz1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Aperol-Spritz1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Aperol-Spritz1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const LimonCelloSpritzEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue LimoncelloSpritz bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Limoncello-Spritz1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Limoncello-Spritz1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Limoncello-Spritz1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const PinaColadaEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue PinaColada bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Pina-Colada1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Pina-Colada1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Pina-Colada1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const StrawBerryLimesEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue StrawBerryLimes bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Erdbeer-Limes1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Erdbeer-Limes1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Erdbeer-Limes1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const WaterEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue Water bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Water1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Water1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Water1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });


const BierEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue Bier bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Bier1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Bier1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Bier1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const EspressoEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue Espresso bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Espresso1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Espresso1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Espresso1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const CappucinoEmbed = new EmbedBuilder()
	.setColor(0x9900FF)
	.setTitle('Neue Cappucino bestellung erhalten')
	.setAuthor({ name: 'WebhookReceiver1', iconURL: 'https://cdn.rootqit.dev/assets/Cappucion1080.png'})
	.setDescription('Neue Bestellung')
	.setThumbnail('https://cdn.rootqit.dev/assets/Cappucion1080.png')
	.setImage('https://cdn.rootqit.dev/assets/Cappucion1080.png')
	.setTimestamp()
	.setFooter({ text: 'Neue Bestellung!' });

const confirm = new ButtonBuilder()
    .setCustomId('Confirm')
    .setLabel('Confirm Deletion')
    .setStyle(ButtonStyle.Success)

const row = new ActionRowBuilder()
    .addComponents(confirm)

// Express server setup
const app = express();
const PORT = process.env.PORT || 30002;

app.use(express.json());

// Webhook routes
app.post('/AperolSpritz', (req, res) => {
    console.log('Received webhook1:', req.body);
    res.status(200).send('Webhook1 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [AperolSpritzEmbed]  });

});

app.post('/LimonCelloSpritz', (req, res) => {
    console.log('Received webhook2:', req.body);
    res.status(200).send('Webhook2 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [LimonCelloSpritzEmbed] });
});

app.post('/PinaColada', (req, res) => {
    console.log('Received webhook3:', req.body);
    res.status(200).send('Webhook3 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [PinaColadaEmbed] });
});

app.post('/StrawberryLimes', (req, res) => {
    console.log('Received webhook4:', req.body);
    res.status(200).send('Webhook4 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [StrawBerryLimesEmbed] });
});

app.post('/Water', (req, res) => {
    console.log('Received webhook5:', req.body);
    res.status(200).send('Webhook5 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [WaterEmbed] });
});

app.post('/Bier', (req, res) => {
    console.log('Received webhook6:', req.body);
    res.status(200).send('Webhook6 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [BierEmbed] });
});

app.post('/Espresso', (req, res) => {
    console.log('Received webhook7:', req.body);
    res.status(200).send('Webhook7 received');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [EspressoEmbed] });
});

app.post('/Cappucino', (req, res) => {
    console.log('Received webhook8:', req.body);
    res.status(200).send('Bestellung ');
    client.channels.cache.get('1280285596258009199').send({components: [row], embeds: [CappucinoEmbed] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const commands = [
    {
        name: 'ping',
        description: 'Replies with the Ping!'
    },
    {
        name: 'clearchannel',
        description: 'Clears all messages in the channel',
        defaultMemberPermissions: PermissionFlagsBits.ManageMessages,
    },
    {
        name: 'link',
        description: 'Pastes the link',

    }
];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(id),
            { body: commands.map(command => ({
                ...command,
                defaultMemberPermissions: command.defaultMemberPermissions ? command.defaultMemberPermissions.toString() : undefined
            })) },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error refreshing commands:', error);
    }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand() && !interaction.isButton()) return;

    if (interaction.isButton()) {
        if (interaction.customId === 'Confirm') {
            await interaction.message.delete();
        }
        return;
    }

    const commandName = interaction.commandName;
    const args = interaction.options;

    if (commandName === 'ping') {
        const rn = Date.now()
        const latency = rn - interaction.createdTimestamp;
        await interaction.reply(`Pong! ⌛ Latency is ${latency}ms  -  ⏲ API Ping is ${Math.round(client.ws.ping)}`);
    } else if (commandName === 'clearchannel') {
        // Check if user has permissions to manage messages
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
            return interaction.reply({ content: 'You do not have permission to use this command!', ephemeral: true });
        }

        await interaction.deferReply({ ephemeral: true });

        try {
            let messagesDeleted = 0;
            let fetchedMessages;

            do {
                fetchedMessages = await interaction.channel.messages.fetch({ limit: 100 });
                const deletableMessages = fetchedMessages.filter(msg => !msg.pinned);
                
                if (deletableMessages.size === 0) break;

                await interaction.channel.bulkDelete(deletableMessages);
                messagesDeleted += deletableMessages.size;
            } while (fetchedMessages.size === 100);

            await interaction.editReply(`Successfully cleared ${messagesDeleted} messages from the channel.`);
        } catch (error) {
            console.error('Error clearing channel:', error);
            await interaction.editReply('An error occurred while trying to clear the channel.');
        }
    }
});

client.login(token);